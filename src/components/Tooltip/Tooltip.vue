<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-26 13:39:34
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-27 13:56:09
 * @FilePath: /yiyi-ui-vue3/src/components/Tooltip/Tooltip.vue
 * @Description: tooltip
-->
<!--  -->
<template>
  <div class="yy-tooltip" v-on="outEvents" ref="popperContainerNode">
    <div class="yy-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <div v-if="isOpen" class="yy-tooltip__popper" ref="popperNode">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types';
import type { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import useClickOutside from '../../hooks/useClickOutside';

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
});

const eimits = defineEmits<TooltipEmits>();

const isOpen = ref(false);
const popperNode = ref<HTMLElement | null>(null);
const triggerNode = ref<HTMLElement | null>(null);
const popperContainerNode = ref<HTMLElement | null>(null);

let popperInstance: null | Instance = null;
let events: Record<string, any> = reactive({});
let outEvents: Record<string, any> = reactive({});

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions
  };
});

const triglePoper = () => {
  isOpen.value = !isOpen.value;
  eimits('visible-change', isOpen.value);
};

const open = () => {
  isOpen.value = true;
  eimits('visible-change', true);
};

const close = () => {
  isOpen.value = false;
  eimits('visible-change', false);
};

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close();
  }
});

const attrachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open;
    outEvents['mouseleave'] = close;
  } else if (props.trigger === 'click') {
    events['click'] = triglePoper;
  }
};

if (!props.manual) {
  attrachEvents();
}

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {};
      outEvents = {};
    } else {
      attrachEvents();
    }
  }
);

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {};
      outEvents = {};
      attrachEvents();
    }
  }
);

watch(
  isOpen,
  (val) => {
    if (val) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value);
      } else {
        popperInstance?.destroy();
        popperInstance = null;
      }
    }
  },
  { flush: 'post' }
);
onUnmounted(() => {
  popperInstance?.destroy();
});

defineExpose<TooltipInstance>({
  show: open,
  hide: close
});
</script>
