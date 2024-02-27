<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-26 13:39:34
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-27 22:07:28
 * @FilePath: \yiyi-ui-vue3\src\components\Tooltip\Tooltip.vue
 * @Description: tooltip
-->
<!--  -->
<template>
  <div class="yy-tooltip" v-on="outEvents" ref="popperContainerNode">
    <div class="yy-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="yy-tooltip__popper" ref="popperNode">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types';
import type { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import useClickOutside from '../../hooks/useClickOutside';
import { debounce } from 'lodash-es';

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0
});

const emits = defineEmits<TooltipEmits>();

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
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ],
    ...props.popperOptions
  };
});

const open = () => {
  isOpen.value = true;
  emits('visible-change', true);
};

const close = () => {
  isOpen.value = false;
  emits('visible-change', false);
};

const openDebounce = debounce(open, props.openDelay);

const closeDebounce = debounce(close, props.closeDelay);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};

const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeDebounce();
  }
});

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal;
    outEvents['mouseleave'] = closeFinal;
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper;
  }
};

if (!props.manual) {
  attachEvents();
}

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {};
      outEvents = {};
    } else {
      attachEvents();
    }
  }
);

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {};
      outEvents = {};
      attachEvents();
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
  show: openFinal,
  hide: closeFinal
});
</script>
