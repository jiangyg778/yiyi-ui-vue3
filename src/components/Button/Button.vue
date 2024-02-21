<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:55:35
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-20 22:30:04
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
      [`yy-button--${size}`]: size
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './types'
import { ref } from 'vue'

defineOptions({
  name: 'YyButton'
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()
defineExpose({ ref: _ref })
</script>
