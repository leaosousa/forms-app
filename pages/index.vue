<template>
  <div>
    <FormStep
      v-for="(step, index) in steps"
      :key="index"
      :data="step.columns"
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
const steps = [
  {
    title: 'Dados pessoais',
    columns: columns,
  },
  {
    title: 'Dados pessoais',
    columns: columns,
  },
  {
    title: 'Dados pessoais',
    columns: columns,
  },
];
</script>

<style lang="scss" scoped></style>
