<template>
  <input
    v-model="inputValue"
    :type="props.data.type"
    :name="props.data.name"
    :placeholder="props.data.placeholder ?? ''"
    :required="props.data.required ?? false"
    :disabled="props.data.disabled ?? false"
    :readonly="props.data.readonly ?? false"
    class="field__input"
  />
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { Field } from '~~/interfaces/fields';

const props = defineProps({
  data: {
    type: Object as PropType<Field>,
    required: true,
  },
});

const inputValue = ref(props.data.value ?? '');
</script>
