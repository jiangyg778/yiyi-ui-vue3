<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-21 21:57:27
 * @FilePath: \yiyi-ui-vue3\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import Button from './components/Button/Button.vue';
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/Button/types';
import './styles/index.css';

const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
});
</script>

<template>
  <Button type="primary" plain disabled ref="buttonRef">按钮</Button>
  <Button type="success">按钮</Button>
  <Button type="warning">按钮</Button>
  <Button type="danger">按钮</Button>
  <Button type="info">按钮</Button>
</template>
