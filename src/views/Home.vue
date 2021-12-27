<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Contact me</h1>

        <p class="subheading font-weight-regular">
          This site is an ongoing project for trying new things in
          <a href="https://vuejs.org/">Vue</a> and
          <a href="https://vuetifyjs.com/en/">Vuetify</a>.
        </p>
      </v-col>

      <v-col class="mb-5 form-wrapper" cols="12">
        <v-form
          class="form"
          v-model="valid"
          ref="form"
          @submit.prevent="signIn"
        >
          <BaseInput
            v-model="user.email"
            id="email"
            :type="'email'"
            label="Email"
            :required="true"
            :counter="false"
          />
          <BaseTextArea
            v-model="user.password"
            id="message"
            label="Message"
            :required="true"
            :counter="false"
            :novalidate="true"
          />
          <div class="center">
            <v-btn class="mr-4 sign-in" color="primary" type="submit">
              Send
            </v-btn>
          </div>
        </v-form>
      </v-col>
      <!-- <v-row class="button-row" align="center" justify="center">
        <v-btn
          v-for="button in buttons"
          :key="button.text"
          class="ma-2"
          depressed
          :color="button.color"
        >
          {{ button.text }}
        </v-btn>
      </v-row> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    valid: false,
    buttons: [
      { color: 'primary', text: 'Primary' },
      { color: 'secondary', text: 'Secondary' },
      { color: 'accent', text: 'Accent' },
      { color: 'error', text: 'Error' },
    ],
    user: {
      email: '',
      message: '',
    },
  }),
  methods: {
    signIn() {
      this.$refs.form.validate();
      if (this.valid) {
        console.log(this.user);
        // auth.signIn(this.user);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  max-width: 500px;
  text-align: left;
  margin: auto;
}
.center {
  text-align: center;
}
</style>
