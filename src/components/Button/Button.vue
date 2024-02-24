<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:55:35
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-24 22:32:13
 * @FilePath: \yiyi-ui-vue3\src\components\Button\Button.vue
 * @Description: button组件
-->
<!--  -->
<template>
  <button
    ref="_ref"
    class="yy-button"
    :class="{
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      [`yy-button--${type}`]: type,
      [`yy-button--${size}`]: size,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <icon :icon="icon" v-if="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types';
import Icon from '../Icon/Icon.vue';
import { ref } from 'vue';

defineOptions({
  name: 'YyButton'
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
});

const _ref = ref<HTMLButtonElement>();
defineExpose({ ref: _ref });
</script>
<style>
.yy-button {
  background-color: var(--main-bg-color);
}
</style>
