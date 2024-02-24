<template>
  <i class="yy-icon">
    <FontAwesomeIcon v-bind="$props" />
  </i>
</template>

<script setup lang="ts">
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineOptions({
  name: 'YyIcon',
  inheritAttrs: false
});
defineProps<IconProps>();
</script>
