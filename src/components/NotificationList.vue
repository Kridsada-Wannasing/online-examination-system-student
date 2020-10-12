<template>
  <v-card elevation="0" outlined :color="color" :dark="isDark" class="ma-0">
    <v-list-item two-line v-if="page == 1">
      <v-list-item-avatar>
        <v-icon size="40">mdi-clock</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>นัดสอบ</v-list-item-title>
        <v-list-item-subtitle>{{
          object.Subject.subjectName
        }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ formatDate }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line v-else-if="page == 2">
      <v-list-item-avatar>
        <v-icon size="40">mdi-clock</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>เลื่อนการสอบ</v-list-item-title>
        <v-list-item-subtitle>{{
          object.Subject.subjectName
        }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ formatDate }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line v-else-if="page == 3">
      <v-list-item-avatar>
        <v-icon size="40">mdi-clock</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>ผลสอบ</v-list-item-title>
        <v-list-item-subtitle>{{ object.examId }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ object.score }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
export default {
  props: {
    page: Number,
    object: Object,
    color: String,
  },
  computed: {
    formatDate() {
      dayjs.extend(localizedFormat);
      return dayjs(this.object.startExamDate).format("ll");
    },
    isDark() {
      return this.page == 1
        ? true
        : this.page == 2
        ? false
        : this.page == 3
        ? true
        : false;
    },
  },
};
</script>

<style></style>
