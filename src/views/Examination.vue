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
              :question="questions[count]"
              :count="count + 1"
              :examId="examId"
              @sendRadiosEventData="getRadiosEventData"
            />
            <v-row>
              <v-col>
                <v-btn v-if="isBack" @click="back" rounded outlined width="150">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn>
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
      answers: [],
      answer: {},
    };
  },
  created() {
    console.log(this.questions);
  },
  computed: {
    ...mapState("question", ["questions"]),
    isNext() {
      return this.count === this.questions.length - 1 ? false : true;
    },
    isBack() {
      return this.count === 0 ? false : true;
    },
  },
  methods: {
    next() {
      this.answers.push(this.answer);
      console.log(this.answers);

      this.$store
        .dispatch("answer/checkedAnswer", this.answers)
        .then(() => {
          this.answers.pop();
          console.log(this.answers);
          this.count++;
        })
        .catch((error) => console.log(error));
    },
    back() {
      this.count--;
    },
    getRadiosEventData(data) {
      this.answer = data;
    },
    sendExam() {
      this.answers.push(this.answer);

      this.$store
        .dispatch("answer/checkedAnswer", this.answers)
        .then(() => {
          this.answers.pop();
          return this.$store
            .dispatch("score/sendExam", { examId: this.examId })
            .then((response) => alert(response))
            .catch((error) => error);
        })
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
