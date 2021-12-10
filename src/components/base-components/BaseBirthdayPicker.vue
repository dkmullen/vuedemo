<template>
  <div>
    <v-container>
      <label :for="id">Date of birth*</label>
      <v-menu
        ref="menu"
        :content-class="customClass"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            prepend-inner-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
            :id="id"
            :rules="requiredRule"
          ></v-text-field>
        </template>
        <v-date-picker
          :active-picker.sync="activePicker"
          v-model="date"
          min="1921-01-01"
          max="2005-12-31"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </v-container>
  </div>
</template>

<script>
import { formFieldMixin } from '../../mixins/formFieldMixin';

export default {
  name: 'BaseBirthdayPicker',
  // pass in custom class value from parent if needed for extra adjustments/style
  props: ['recordFound', 'customClass', 'id'],
  mixins: [formFieldMixin],
  data: () => ({
    activePicker: null,
    date: null,
    menu: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
      this.$emit('dateChange', date);
    }
  }
};
</script>
