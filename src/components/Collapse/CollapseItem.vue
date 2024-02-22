<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-22 13:30:55
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-22 23:30:29
 * @FilePath: \yiyi-ui-vue3\src\components\Collapse\CollapseItem.vue
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
    <div class="yy-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
      <slot />
    </div>
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
</script>
<style></style>
