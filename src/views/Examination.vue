<template> </template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState("question", ["questions"]),
  },
};
</script>

<style></style>
