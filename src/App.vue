<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-24 21:33:27
 * @FilePath: \yiyi-ui-vue3\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import Button from './components/Button/Button.vue';
import Item from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue';
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/Button/types';
import './styles/index.css';

const buttonRef = ref<ButtonInstance | null>(null);
const openValue = ref(['a']);

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
  <Collapse v-model="openValue">
    <Item name="a" title="Title A">
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </Item>
    <Item name="b" title="Title B">
      <div>this is bbbbb test</div>
    </Item>
    <Item name="c" title="Disabled Title" disabled>
      <div>this is cccc test</div>
    </Item>
  </Collapse>
  <Icon icon="arrow-up" />
</template>
