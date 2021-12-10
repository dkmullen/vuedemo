<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-toolbar color="primary" dark
          ><h2 class="title-text">{{ title }}</h2></v-toolbar
        >
        <v-form v-model="valid" ref="form" @submit.prevent="action">
          <v-card-text style="color:black !important">
            <v-container>
              <div
                v-if="instructions"
                v-html="instructions"
                id="instructions"
              ></div>
              <BaseInput
                v-model="email"
                id="email"
                :type="'email'"
                label="Email"
                :required="true"
                :counter="false"
              />
              <div class="required-message">
                {{ fixedData.requiredFieldsMessage }}
              </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn id="nonActionBtn" @click="cancel()">
              {{ cancelButtonText }}
            </v-btn>
            <v-btn id="actionBtn" color="primary" type="submit">
              {{ actionButtonText }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['fixedData']),
  name: 'FormDialog',
  props: {
    type: { type: String, default: '' },
    title: { type: String, default: '' },
    instructions: { type: String, default: '' },
    cancelButtonText: { type: String, default: 'Cancel' },
    actionButtonText: { type: String, default: 'Submit' },
    dialog: { type: Boolean, default: false }
  },

  data() {
    return {
      email: '',
      valid: false,
      emailRules: [v => !!v || 'email is required']
    };
  },
  methods: {
    action() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$emit('action', this.email);
        this.email = '';
      }
    },
    cancel() {
      this.$emit('cancel', true);
      this.email = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  background-color: white !important;
}
.title-text {
  margin-bottom: 0;
}
#instructions {
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.v-card__actions {
  position: relative;
  bottom: 10px;
}
</style>
