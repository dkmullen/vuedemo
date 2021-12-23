<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-container class="fill-height">
      <router-view />
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item.link)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', link: 'Home' },
        { title: 'About', icon: 'mdi-information', link: 'About' },
        { title: 'Weather', icon: 'mdi-umbrella', link: 'Weather' },
        { title: 'Run Calculator', icon: 'mdi-run', link: 'Home' },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goTo(link) {
      this.$router.push({ name: link });
    },
  },
  // props: {
  //   drawer: { type: Boolean, default: false },
  // },
};
</script>

<style></style>
