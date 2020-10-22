<template>
  <v-container id="examination" fluid>
    <v-row class="mx-1">
      <v-col cols="2">
        <StatusExam :isSent="isSent" @isTimeout="getIsTimeout" />
      </v-col>
      <v-col cols="10">
        <v-card min-height="670" class="rounded-xl">
          <div class="pa-10" style="height:550px">
            <Question
              ref="setNullDataChildComponent"
              :question="questions[count]"
              :count="count + 1"
              :examId="examId"
              @sendRadiosEvent="getRadiosData"
              @sendCheckBoxEvent="getCheckBoxData"
              @sendAnswersSubjective="getSubjectiveAnswers"
            />
          </div>
          <div class="d-flex justify-end mr-10">
            <v-btn
              x-large
              v-if="isNext"
              @click="next"
              rounded
              outlined
              width="200"
            >
              <v-icon left>mdi-arrow-right</v-icon>
              Next
            </v-btn>
            <v-btn
              x-large
              v-else
              @click="sendExam"
              rounded
              outlined
              width="200"
            >
              <v-icon left>mdi-arrow-right</v-icon>
              Finished
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Question from "@/components/Question";
import StatusExam from "@/components/StatusExam";

export default {
  components: {
    Question,
    StatusExam,
  },
  props: ["examId"],
  data() {
    return {
      count: 0,
      answer: null,
      isSent: false,
    };
  },
  computed: {
    ...mapState("question", ["questions"]),
    isNext() {
      return this.count === this.questions.length - 1 ? false : true;
    },
  },
  methods: {
    next() {
      if (!this.answer) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อ");
        this.answer = null;
      } else {
        this.$store
          .dispatch("answer/checkedAnswer", this.answer)
          .then(() => {
            this.answer = null;
            this.$refs.setNullDataChildComponent.setNullData();
            this.count++;
          })
          .catch((error) => alert(error));
      }
      // this.count++;
    },
    back() {
      this.count--;
    },
    getRadiosData(data) {
      this.answer = data;
    },
    getCheckBoxData(data) {
      this.answer = data;
    },
    getSubjectiveAnswers(data) {
      this.answer = data;
    },
    sendExam() {
      if (!this.answer) {
        this.answer = null;
        return alert("กรุณาตอบคำถามให้ครบทุกข้อ");
      }
      this.isSent = true;
      confirm("ยืนยันการส่งคำตอบ") &&
        this.$store
          .dispatch("answer/checkedAnswer", this.answer)
          .then(() =>
            this.$store
              .dispatch("score/sendExam", {
                examId: this.$route.params.examId,
                meetingId: this.$route.params.meetingId,
                subjectId: this.$route.params.subjectId,
              })
              .then(() => this.$router.push({ name: "ReportScore" }))
              .catch((error) => Promise.reject(error))
          )
          .catch((error) => alert(error));
    },
    getIsTimeout() {
      this.isSent = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#examination {
  background-color: #033a5f;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
