<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="360">
      <v-card>
        <v-card-title class="text-h5">
          Scan this code
        </v-card-title>
        <v-card-text
          >Use an authenticator app (Google, LastPass, etc.) to scan this
          code.</v-card-text
        >
        <div>
          <div id="qr-code"></div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="done">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import QrCreator from 'qr-creator';

export default {
  name: 'BaseQrCode',
  props: ['dialog'],

  data() {
    return {};
  },
  methods: {
    renderCode(str) {
      setTimeout(() => {
        QrCreator.render(
          {
            text: str,
            radius: 0.5, // 0.0 to 0.5
            ecLevel: 'H', // L, M, Q, H
            fill: '#000000', // foreground color
            background: null, // color or null for transparent
            size: 256 // in pixels
          },
          document.querySelector('#qr-code')
        );
      }, 100);
    },
    done() {
      this.$emit('done', true);
    }
  }
};
</script>

<style lang="scss" scoped>
#qr-code {
  text-align: center;
}
</style>
