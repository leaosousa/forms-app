<template>
  <div class="field field--error">
    <label v-if="props.data.label != ''" :for="props.id" class="field__label">
      {{ props.data.label }}
    </label>
    <FieldInput :id="props.id" :data="props.data" />
    <MessageComponent
      v-if="props.data.errorMessage"
      :message="props.data.errorMessage"
      class="message--error"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { Field } from '~~/interfaces/fields';

const props = defineProps({
  data: {
    type: Object as PropType<Field>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import './FieldComponent.scss';
</style>
