<template>
  <v-card id="welcome" class="rounded-xl">
    <v-card-text>
      คะแนนทั้งหมด
    </v-card-text>
    <v-card-text>
      คะแนนที่ได้
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("score", ["score"]),
  },
};
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
  color: white;
  background-image: linear-gradient(156deg, #1a73e8, #17dcbb);
  .content {
    margin: 0;
    padding: 0;
  }
}
</style>
