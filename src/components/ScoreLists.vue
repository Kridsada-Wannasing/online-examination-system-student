<template>
  <v-card id="score" class="rounded-xl">
    <v-container class="px-8">
      <v-row>
        <v-col>
          ผลคะแนนสอบ
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- v-for="(score, index) in scores"
          :key="index"
          cols="2"
          class="pa-4" -->
          <!-- <ScoreCard :score="score" /> -->
          <v-data-table
            :headers="headers"
            :items="scores"
            class="elevation-0"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
// import ScoreCard from "../components/ScoreCard";

export default {
  components: {
    // ScoreCard,
  },
  created() {
    this.$store.dispatch("score/getAllScores");
    console.log(this.scores);
  },
  computed: {
    ...mapState("score", ["scores"]),
  },
  //   methods: {
  //     getScoreData(data) {
  //       this.score = data;
  //     },
  //   },
  data() {
    return {
      headers: [
        {
          text: "ชื่อวิชา",
          align: "start",
          value: "subject",
        },
        {
          text: "การสอบ",
          align: "start",
          value: "examType",
        },
        {
          text: "ภาคเรียน",
          align: "start",
          value: "term",
        },
        {
          text: "ปีการศึกษา",
          align: "start",
          value: "year",
        },
        {
          text: "คะแนนเต็ม",
          align: "start",
          value: "sum",
        },
        {
          text: "คะแนนที่ได้",
          align: "start",
          value: "score",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#score {
  min-height: 49vh;
}
</style>
