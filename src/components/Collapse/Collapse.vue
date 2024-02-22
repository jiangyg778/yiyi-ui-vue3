<!--
 * @Author: jiangyaguang 
 * @Date: 2024-02-22 13:30:32
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-22 23:10:04
 * @FilePath: \yiyi-ui-vue3\src\components\Collapse\Collapse.vue
 * @Description: Collapse
-->
<!--  -->
<template>
  <div class="yy-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { collapseContextKey, type CollapseEmits, type CollapseProps, type NameType } from './types';
defineOptions({
  name: 'YyCollapse'
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    activeNames.value = val;
  }
);

// 手风琴特效提示
if (props.accordion && activeNames.value.length > 1) {
  console.warn('[YyCollapse] The accordion mode should have one active name at most.');
}

const handleItemClick = (name: NameType) => {
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === name ? [] : [name];
  } else {
    const index = activeNames.value.indexOf(name);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(name);
    }
  }
  emits('update:modelValue', activeNames.value);
  emits('change', activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick
});
</script>
