<template>
  <div class="field-container-tmp">
    <FormColumn
      v-for="(column, index) in columns"
      :key="index"
      :class="'form__column--w-' + column.size"
      :data="column.fields"
      :form-id="formId"
    />
  </div>
</template>

<script setup lang="ts">
const formId = 'form';
const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Nome',
    placeholder: 'Nome',
    required: false,
    errorMessage: 'Campo obrigatório',
    disabled: false,
    readonly: false,
    value: '',
    size: '100',
  },
  {
    type: 'email',
    name: 'email',
    label: 'E-mail',
    placeholder: 'E-mail',
    required: false,
    errorMessage: 'Campo obrigatório',
    disabled: false,
    readonly: false,
    value: '',
    size: '100',
  },
];
const columns = [
  {
    size: '50',
    fields: fields,
  },
  {
    size: '25',
    fields: fields,
  },
];
</script>

<style lang="scss" scoped>
.field-container-tmp {
  align-items: flex-start;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(4, 1fr);
}
</style>
