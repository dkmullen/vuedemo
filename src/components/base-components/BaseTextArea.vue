<template>
  <v-container>
    <label :for="id">{{ label }}<span v-if="required">*</span></label>
    <v-textarea
      :rules="required ? requiredRule : []"
      @input="updateValue"
      :class="required ? 'required' : ''"
      filled
      :rows="rows"
      v-on="listeners"
      :maxlength="maxlen"
      counter
      :id="id"
    ></v-textarea>
  </v-container>
</template>

<script>
import { formFieldMixin } from '../../mixins/formFieldMixin';

export default {
  name: 'BaseTextArea',
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  props: {
    rows: { type: String, default: '4' },
    maxlen: { type: Number, default: 1000 },
    id: { type: String, default: '' },
  },
};
</script>

<style></style>
