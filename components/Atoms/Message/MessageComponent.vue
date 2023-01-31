<template>
  <p class="message">{{ props.message }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import './Message.scss';
</style>
