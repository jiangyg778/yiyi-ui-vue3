<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-03-01 22:41:17
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-04 22:56:06
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
    ref="messageRef"
    :style="cssStyle"
  >
    <div class="yy-message__content">
      <slot>
        {{ offset }} -{{ topOffset }} -{{ height }} -{{ bottomOffset }}
        <RenderVnode :vNode="message" v-if="message" />
      </slot>
    </div>
    <div class="yy-message__close" v-if="showClose">
      <Icon icon="xmark" @click.stop="visible = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { MessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { getLastBottomOffset, getLatestMessage } from './method';

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20
});

const visible = ref(false);
const messageRef = ref<HTMLDivElement>();

//div的高度
const height = ref(0);

const lastOffset = computed(() => {
  return getLastBottomOffset(props.id);
});

const topOffset = computed(() => {
  return lastOffset.value + props.offset;
});

const bottomOffset = computed(() => {
  return topOffset.value + height.value;
});

const cssStyle = computed(() => {
  return {
    top: `${topOffset.value}px`
  };
});

onMounted(async () => {
  visible.value = true;
  startTimer();
  await nextTick();
  height.value = messageRef.value!.getBoundingClientRect().height;
});

const startTimer = () => {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
};

watch(visible, (val) => {
  if (!val) {
    props.onDestory && props.onDestory();
  }
});
defineExpose({
  bottomOffset
});
</script>
<style></style>
