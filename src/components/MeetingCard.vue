<template>
  <router-link
    :to="{
      name: 'EnterToExamination',
      params: { meetingId: meeting.meetingId },
    }"
    style="text-decoration:none;"
  >
    <v-img v-if="isColor" src="@/assets/folder/Folder_green.svg">
      <v-row dense class="white--text">
        <v-col class="text-left ma-4 mt-6">
          <div>
            <p style="font-size: 14px;">
              <b>{{ meeting.Subject.subjectName }} </b>
            </p>
            <p style="font-size: 12px">
              {{ meeting.examType }} ภาคเรียนที่ {{ meeting.term }}/{{
                meeting.year
              }}
            </p>
            <p class="mb-0" style="font-size: 12px">
              {{ dateOfExam }}
            </p>
            <p class="mb-0" style="font-size: 12px">
              เวลา {{ startExamDate }}น. - {{ endExamDate }}น.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-img v-else src="@/assets/folder/Folder_blue.svg">
      <v-row dense class="white--text">
        <v-col class="text-left ma-4 mb-6">
          <div>
            <p class="mb-0" style="font-size: 14px;">
              <b>{{ meeting.Subject.subjectName }}</b>
            </p>
            <p style="font-size: 12px">{{ meeting.examType }}</p>
            <p class="mb-0" style="font-size: 12px">
              ภาคเรียนที่ {{ meeting.term }}/{{ meeting.year }}
            </p>
            <p class="mb-0" style="font-size: 12px">
              {{ dateOfExam }}
            </p>
            <p class="mb-0" style="font-size: 12px">
              เวลา {{ startExamDate }}น. - {{ endExamDate }}น.
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
    meeting: null,
    index: Number,
  },
  data() {
    return {
      dateOfExam: "",
      startExamDate: "",
      endExamDate: "",
    };
  },
  computed: {
    isColor() {
      return this.index % 2 == 0 ? true : false;
    },
  },
  created() {
    dayjs.extend(localizedFormat);
    require("dayjs/locale/th");
    this.dateOfExam = dayjs(this.meeting.startExamDate)
      .locale("th")
      .format("LL");
    this.startExamDate = dayjs(this.meeting.startExamDate)
      .locale("th")
      .format("HH:mm");
    this.endExamDate = dayjs(this.meeting.endExamDate)
      .locale("th")
      .format("HH:mm");
  },
};
</script>

<style></style>
