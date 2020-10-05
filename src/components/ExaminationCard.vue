<template>
  <router-link
    :to="{
      name: 'EnterToExamination',
      params: { examinationId: examination.examination.examinationId },
    }"
  >
    <!-- <v-card min-height="100" color="blue rounded-lg">
      <v-card-title>{{ subjectName }}</v-card-title>
      <v-card-subtitle>{{ examDate }}</v-card-subtitle>
    </v-card> -->
    <v-img src="@/assets/folder/Folder_blue.svg">
      <v-row class="white--text px-3 py-4">
        <v-col class="text-left">
          <div style="height: 40%">
            <p class="mb-0" style="font-size: 14px;">
              <b>{{ examination.subject.subjectName }}</b>
            </p>
            <p style="font-size: 12px">{{ examination.subject.subjectId }}</p>
          </div>
          <div>
            <p class="mb-0" style="font-size: 12px">
              {{ dateOfExam }}
            </p>
            <br />
            <p class="mb-0" style="font-size: 12px">
              เวลา {{ startDate }}น. - {{ endDate }}น.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </router-link>
</template>

<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default {
  props: {
    examination: null,
  },
  data() {
    return {
      dateOfExam: "",
      startDate: "",
      endDate: "",
    };
  },
  created() {
    dayjs.extend(localizedFormat);
    this.dateOfExam = dayjs(this.examination.meeting.examDate, "th").format(
      "LL"
    );
    this.startDate = dayjs(this.examination.examination.startDate).format(
      "HH:mm"
    );
    this.endDate = dayjs(this.examination.examination.startDate).format(
      "HH:mm"
    );
  },
};
</script>

<style></style>
