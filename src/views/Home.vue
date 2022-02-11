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
    <ul>
      <li v-for="item in articles" :key="item.id">
        <a :href="item.url" target="_blank">
          <strong>{{ item.title }}</strong>
        </a>
        - {{ item.by }} - {{ item.type }}
      </li>
    </ul>
  </v-container>
</template>

<script>
import api from '../services/apiService';
import Compress from 'compress.js';

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
    newsList: null,
    articles: [],
  }),
  methods: {
    // signIn() {
    //   this.$refs.form.validate();
    //   if (this.valid) {
    //     console.log(this.user);
    //     // auth.signIn(this.user);
    //   }
    // },
    signIn() {
      this.$refs.form.validate();
      if (this.valid) {
        // Resize and save a photo
        console.log(this.meFile);
        const compress = new Compress();
        let list = [this.meFile];
        compress
          .compress(list, {
            // size: 4, // the max size in MB, defaults to 2MB
            quality: 0.7, // the quality of the image, max is 1,
            // maxWidth: 1920, // the max width of the output image, defaults to 1920px
            // maxHeight: 1920, // the max height of the output image, defaults to 1920px
            resize: false, // defaults to true, set false if you do not want to resize the image width and height
            rotate: false, // See the rotation section below
          })
          .then((data) => {
            // returns an array of compressed images
            console.log(data);
            const img1 = data[0];
            const base64str = img1.data;
            const imgExt = img1.ext;
            const file = Compress.convertBase64ToFile(base64str, imgExt);
            console.log(file);
            var a = document.createElement('a'),
              url = URL.createObjectURL(file);
            a.href = url;
            a.download = this.meFile.name;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
            }, 0);
          });
      }
    },
    async getNewsList() {
      const newsList = await api.getNewsList().catch((err) => {
        console.error(err);
      });
      if (newsList) {
        this.newsList = newsList.data;
        const slicedArray = this.newsList.slice(0, 9);
        slicedArray.forEach((i) => {
          this.getNewsItem(i);
        });
      }
    },
    async getNewsItem(i) {
      const newsItem = await api.getNewsItem(i);
      this.articles.push(newsItem.data);
      console.log(newsItem.data);
    },
  },
  created() {
    this.getNewsList();
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
