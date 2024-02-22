<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-22 13:30:55
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-22 13:46:53
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
    <div class="yy-collapse-item_header" :id="`item-header-${name}`">
      <slot name="title"> {{ title }} </slot>
    </div>
    <div class="yy-collapse-item_content" :id="`item-content-${name}`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types';
import {} from 'vue';
defineOptions({
  name: 'YyCollapseItem'
});
defineProps<CollapseItemProps>();
</script>
<style></style>
