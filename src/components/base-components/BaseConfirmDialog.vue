<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-toolbar color="primary" dark
          ><h2 class="title-text">{{ title }}</h2></v-toolbar
        >

        <v-card-text
          class="dialog-text"
          v-html="message"
          style="color:black !important"
        >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Dangerous (destructive) route -->
          <v-btn text @click="action()">
            {{ actionButtonText }}
          </v-btn>
          <!-- Safe (non-destructive) route -->
          <v-btn color="primary" @click="cancel()">
            {{ cancelButtonText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: ['title', 'message', 'actionButtonText', 'cancelButtonText', 'dialog'],

  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit('action', true);
    },
    cancel() {
      this.$emit('cancel', true);
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
</style>
