<template>
  <i class="yy-icon" :class="{ [`yy-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <FontAwesomeIcon v-bind="filtersProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';
defineOptions({
  name: 'YyIcon',
  inheritAttrs: false
});
const props = defineProps<IconProps>();

const filtersProps = computed(() => {
  return omit(props, ['type', 'color']);
});

const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>
