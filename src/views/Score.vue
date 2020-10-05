<template>
  <v-container id="score" fluid>
    <v-row class="mx-1">
      <v-col><h3>ผลคะแนนสอบ</h3></v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col cols="12"><ScoreLists /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScoreLists from "@/components/ScoreLists.vue";

export default {
  name: "Home",
  components: {
    ScoreLists,
  },
};
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
  color: black;
  // background-image: url("./../assets/login/pexels-buro-millennial-1438081.png");
  background-image: linear-gradient(
    226deg,
    rgba(26, 115, 232, 0.52),
    rgba(127, 216, 88, 0.73)
  );
  .content {
    margin: 0;
    padding: 0;
  }
}
</style>
