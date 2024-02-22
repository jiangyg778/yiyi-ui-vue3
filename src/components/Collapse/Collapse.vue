<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-22 13:30:32
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-22 13:35:56
 * @FilePath: /yiyi-ui-vue3/src/components/Collapse/Collapse.vue
 * @Description: Collapse
-->
<!--  -->
<template>
  <div class="yy-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'YyCollapse'
});
</script>
