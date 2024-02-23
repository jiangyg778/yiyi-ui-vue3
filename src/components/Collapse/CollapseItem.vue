<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-22 13:30:55
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-23 13:00:07
 * @FilePath: /yiyi-ui-vue3/src/components/Collapse/CollapseItem.vue
 * @Description: CollapseItem
-->
<!--  -->
<template>
  <div
    class="yy-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="yy-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      @click="handleClick"
    >
      <slot name="title"> {{ title }} </slot>
    </div>
    <transition name="slide" v-on="transitionEvent">
      <div class="yy-clollapse-item__wrapper" v-show="isActive">
        <div class="yy-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types';
import { computed, inject } from 'vue';
import { collapseContextKey } from './types';

defineOptions({
  name: 'YyCollapseItem'
});

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);

const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});

const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};

const transitionEvent: Record<string, (el: HTMLElement) => void> = {
  beforeEnter: (el) => {
    el.style.height = '0px';
    el.style.overflow = 'hidden';
  },
  enter: (el) => {
    el.style.height = el.scrollHeight + 'px';
  },
  afterEnter: (el) => {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave: (el) => {
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  },
  leave: (el) => {
    el.style.height = '0px';
  },
  afterLeave: (el) => {
    el.style.height = '';
    el.style.overflow = '';
  }
};
</script>
<style></style>
