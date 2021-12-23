<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Cupcake Logo"
            class="shrink mr-2"
            contain
            src="./assets/cupcake.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <div class="logo-text">Vue Demo</div>
      </div>

      <v-spacer></v-spacer>
      <!-- <router-link class="header-link mr-1" to="/">Home</router-link> |
      <router-link class="header-link ml-1 mr-4" to="/about">About</router-link> -->

      <v-btn @click="toggleTheme" class="theme-btn" text>
        <span class="mr-2">{{
          !$vuetify.theme.dark ? 'Go dark' : 'Go light'
        }}</span>
        <v-icon>{{
          !$vuetify.theme.dark ? 'mdi-toggle-switch-off' : 'mdi-toggle-switch'
        }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <nav-drawer ref="drawer"> </nav-drawer>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',
  components: { NavDrawer },
  data() {
    return {};
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    toggleNav() {
      this.$refs.drawer.toggleDrawer();
    },
  },
};
</script>
<style lang="scss">
.logo-text {
  font-size: 2rem;
  font-weight: 300;
  font-variant: small-caps;
}
.header-link {
  color: white !important;
}
.theme-btn {
  width: 140px;
}
</style>
