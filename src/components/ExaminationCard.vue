<template>
  <router-link
    :to="{
      name: 'EnterToExamination',
      params: { examinationId: examination.examinationId },
    }"
  >
    <v-card min-height="100" color="blue rounded-lg">
      <v-card-title>{{ examination.Meeting.subjectId }}</v-card-title>
      <v-card-subtitle>{{ examination.Meeting.meetingId }}</v-card-subtitle>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    examination: null,
  },
};
</script>

<style></style>
