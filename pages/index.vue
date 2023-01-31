<template>
  <div class="field-container-tmp">
    <FieldComponent
      v-for="(field, index) in fields"
      :id="formId + '-' + field.name"
      :key="index"
      :class="'field--w-' + field.size"
      :data="field"
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
    size: '50',
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
    size: '50',
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
