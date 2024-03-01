<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-01 23:10:56
 * @FilePath: \yiyi-ui-vue3\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import Button from './components/Button/Button.vue';
import Item from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue';
import { ref, onMounted, h } from 'vue';
import type { ButtonInstance } from './components/Button/types';
import './styles/index.css';
import Tooltip from './components/Tooltip/Tooltip.vue';
import Dropdown from './components/Dropdown/Dropdown.vue';
import Message from './components/Message/index.vue';
import { createMessage } from './components/Message/method';

const buttonRef = ref<ButtonInstance | null>(null);
const openValue = ref(['a']);
const trigger = ref('hover');
const options: any[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
];

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
  createMessage({
    type: 'info',
    message: 'this is message123',
    duration: 0,
    showClose: true
  });
});
</script>

<template>
  <Button type="primary" plain disabled ref="buttonRef">按钮</Button>
  <Button type="success">按钮</Button>
  <Button type="warning">按钮</Button>
  <Button type="danger">按钮</Button>
  <Button type="info">按钮</Button>
  <br />
  <Button type="info" loading>按钮</Button>
  <Button type="success" plain icon="arrow-up">按钮1</Button>
  <br />

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
  <Icon icon="arrow-up" type="danger" color="yellow" />
  <Tooltip placement="right" trigger="hover" :openDelay="1000" :closeDelay="1000">
    <h1>11111</h1>
    <template #content>
      <div>22222</div>
    </template>
  </Tooltip>
  <Dropdown trigger="click" placement="bottom" :menuOptions="options">
    <Button type="primary">按钮</Button>
  </Dropdown>
  <Message type="info" :duration="0" showClose>this is message</Message>
</template>
