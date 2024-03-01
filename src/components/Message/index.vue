<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-03-01 22:41:17
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-01 23:00:19
 * @FilePath: \yiyi-ui-vue3\src\components\Message\index.vue
 * @Description: message
-->
<template>
  <div
    class="yy-message"
    role="alert"
    v-show="visible"
    :class="{
      [`yy-message--${type}`]: type,
      'is-close': showClose
    }"
  >
    <div class="yy-message__content">
      <slot>
        <RenderVnode :vNode="message" v-if="message" />
      </slot>
    </div>
    <div class="yy-message__close" v-if="showClose">
      <Icon icon="xmark" @click.stop="visible = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { MessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000
});

const visible = ref(false);

onMounted(() => {
  visible.value = true;
  startTimer();
});

const startTimer = () => {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
};
</script>
<style></style>
