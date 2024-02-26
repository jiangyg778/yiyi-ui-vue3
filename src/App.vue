<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-26 18:53:38
 * @FilePath: /yiyi-ui-vue3/src/App.vue
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
import Tooltip from './components/Tooltip/Tooltip.vue';

const buttonRef = ref<ButtonInstance | null>(null);
const openValue = ref(['a']);
const trigger = ref('hover');

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
  <Tooltip content="111111" placement="right" :trigger="trigger">
    1212121
    <template #content>
      <div>333333</div>
    </template>
  </Tooltip>
</template>
