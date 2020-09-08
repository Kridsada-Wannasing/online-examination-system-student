<template> </template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.examinations = this.getAllExaminations;
  },
  computed: {
    ...mapState("examination", ["examinations"]),
  },
};
</script>

<style></style>
