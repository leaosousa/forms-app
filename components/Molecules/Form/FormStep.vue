<template>
  <div class="form__step">
    <FormColumn
      v-for="(column, index) in props.data"
      :key="index"
      :class="'form__column--w-' + column.size"
      :data="column.fields"
      :form-id="formId"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { Column } from '~~/interfaces/forms';

const props = defineProps({
  data: {
    type: Array as PropType<Column[]>,
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
