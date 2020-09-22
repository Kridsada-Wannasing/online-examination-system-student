<template>
  <v-container id="examination" fluid>
    <v-row class="mx-1">
      <v-col cols="2">
        <StatusExam />
      </v-col>
      <v-col cols="10">
        <v-card min-height="670" class="rounded-xl">
          <v-container>
            <Question
              ref="setNullDataChildComponent"
              :question="questions[count]"
              :count="count + 1"
              :examId="examId"
              :countAnswerOfQuestion="countAnswerOfQuestion[count]"
              @sendRadiosEvent="getRadiosData"
              @sendCheckBoxEvent="getCheckBoxData"
            />
            <v-row>
              <v-col>
                <!-- <v-btn v-if="isBack" @click="back" rounded outlined width="150">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn> -->
              </v-col>
              <v-col>
                <v-btn v-if="isNext" @click="next" rounded outlined width="150">
                  <v-icon left>mdi-arrow-right</v-icon>
                  Next
                </v-btn>
                <v-btn v-else @click="sendExam" rounded outlined width="150">
                  <v-icon left>mdi-arrow-right</v-icon>
                  Finished
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
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
    };
  },
  computed: {
    ...mapState("question", ["questions", "countAnswerOfQuestion"]),
    isNext() {
      return this.count === this.questions.length - 1 ? false : true;
    },
    isBack() {
      return this.count === 0 ? false : true;
    },
  },
  methods: {
    next() {
      this.$store
        .dispatch("answer/checkedAnswer", this.answer)
        .then(() => {
          this.$refs.setNullDataChildComponent.setNullData();
          this.count++;
        })
        .catch((error) => console.log(error));
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
    sendExam() {
      this.$store
        .dispatch("answer/checkedAnswer", this.answer)
        .then(() =>
          this.$store
            .dispatch("score/sendExam", { examId: this.examId })
            .then((response) =>
              this.$router.push({
                name: "ReportScore",
                params: { score: response.score },
              })
            )
            .catch((error) => error)
        )
        .catch((error) => console.log(error));
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
