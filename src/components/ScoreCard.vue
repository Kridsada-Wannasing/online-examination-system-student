<template>
  <v-card min-height="100" color="blue rounded-lg" @click="getScore">
    <v-card-title>{{ score.scoreId }}</v-card-title>
    <v-card-subtitle>{{ score.examId }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    score: null,
  },
  methods: {
    getScore() {
      this.$store.dispatch("score/getScore", { scoreId: this.score.scoreId });
    },
  },
};
</script>

<style></style>
