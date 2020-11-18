<template>
  <v-container id="reportScore" class="fill-height" fluid>
    <v-row class="d-flex flex-column align-center" v-if="score.isCompleted">
      <v-col class="d-flex justify-center" cols="3">
        <v-img src="./../assets/examination/Logo_white.svg"></v-img>
      </v-col>
      <v-col class="col-1 d-flex justify-center" cols="3">
        Completed!
      </v-col>
      <v-col class="col-2 d-flex justify-center" cols="4">
        Your total score
      </v-col>
      <v-col class="col-2 d-flex justify-center" cols="3">
        {{ score.score }}
      </v-col>
      <v-col class="col-2 d-flex justify-center">
        <v-btn
          depressed
          large
          rounded
          width="150"
          color="white"
          :to="{ name: 'Welcome' }"
          ><v-icon left>mdi-home</v-icon>Home</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="d-flex flex-column align-center text-center" v-else>
      <v-col class="d-flex justify-center" cols="3">
        <v-img src="./../assets/examination/Logo_white.svg"></v-img>
      </v-col>
      <v-col class="col-1 d-flex justify-center" cols="3">
        Completed!
      </v-col>
      <v-col class="col-2 d-flex justify-center" cols="6">
        Your testing done, Now we would like to check the answer. The total
        score will show on your Testing Score menu soon... Good luck!
      </v-col>
      <v-col class="col-2 d-flex justify-center">
        <v-btn
          depressed
          large
          rounded
          width="150"
          color="white"
          :to="{ name: 'Welcome' }"
          ><v-icon left>mdi-home</v-icon>Home</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["score"],
  computed: {
    ...mapState("score", ["score"]),
  },
};
</script>

<style lang="scss" scoped>
#reportScore {
  background: url("./../assets/score/Group 433.png");
  height: 100%;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .col-1 {
    font-size: 60px;
  }
  .col-2 {
    font-size: 40px;
  }
}
</style>
