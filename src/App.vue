<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-22 13:52:34
 * @FilePath: /yiyi-ui-vue3/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import Button from './components/Button/Button.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';
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
  <Collapse>
    <CollapseItem title="标题1" name="a">
      <p>内容1</p>
    </CollapseItem>
    <CollapseItem title="标题2" name="b">
      <p>内容2</p>
    </CollapseItem>
    <CollapseItem name="c">
      <template #title>
        <p>标题3</p>
      </template>
      <p>内容3</p>
    </CollapseItem>
  </Collapse>
</template>
