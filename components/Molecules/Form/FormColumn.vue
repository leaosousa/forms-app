<template>
  <div class="form__column">
    <FieldComponent
      v-for="(field, index) in props.data"
      :id="props.formId + '-' + field.name"
      :key="index"
      :class="'field--w-' + field.size"
      :data="field"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { Field } from '~~/interfaces/fields';

const props = defineProps({
  data: {
    type: Array as PropType<Field[]>,
    required: true,
  },
  formId: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>
