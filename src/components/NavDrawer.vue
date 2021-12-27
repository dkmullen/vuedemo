<template>
  <v-sheet class="overflow-hidden" style="position: relative">
    <v-container class="fill-height">
      <router-view />
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/dkm.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Dennis Mullen</v-list-item-title>
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
        { title: 'Charts', icon: 'mdi-chart-box', link: 'Charts' },
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
