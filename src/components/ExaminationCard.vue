<template>
  <router-link
    :to="{
      name: 'EnterToExamination',
      params: { examinationId: examination.examinationId },
    }"
  >
    <v-card min-height="100" color="blue rounded-lg">
      <v-card-title>{{ subjectName }}</v-card-title>
      <v-card-subtitle>{{ examDate }}</v-card-subtitle>
    </v-card>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  props: {
    examination: null,
  },
  data() {
    return {
      subjectName: "",
      examDate: "",
    };
  },
  created() {
    this.subjectName = this.examination.Meeting.Subject.subjectName;
    this.examDate = moment(this.examination.Meeting.examDate)
      .locale("th")
      .format("LLL");
  },
};
</script>

<style></style>
