<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { ref, onMounted } from 'vue'
import type { ButtonInstance } from './components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
</script>

<template>
  <Button type="primary" plain disabled ref="buttonRef">按钮</Button>
</template>
