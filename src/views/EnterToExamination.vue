<template> </template>

<script>
export default {
  data() {
    return {
      password: "",
      examinationId: 0,
    };
  },
  methods: {
    enterToExamination() {
      this.$store
        .dispatch("examination/enterToExamination", {
          password: this.password,
          examinationId: this.examinationId,
        })
        .then((response) => this.$router.push({ name: "Examination" }))
        .catch((err) => alert(err));
    },
  },
};
</script>

<style></style>
