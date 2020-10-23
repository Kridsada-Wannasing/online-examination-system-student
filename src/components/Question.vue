<template>
  <v-row>
    <v-col cols="6" v-if="showImage" class="pa-8">
      <v-img
        :src="`${process.env.VUE_APP_API_URL}/static/${question.Image.path}`"
        max-height="530"
        max-width="500"
      ></v-img>
    </v-col>
    <v-col>
      <v-row>
        <v-col>
          <div class="d-flex">
            <p style="font-size:1.5rem" class="ma-0 pa-0">
              {{ count }}.<span style="font-size:1.5rem" class="ma-0 pa-0">
                {{ question.question }}
                {{ showNumberOfAnswers }}
              </span>
            </p>
          </div>
        </v-col>
      </v-row>
      <div class="ma-0 pa-0" v-if="isObjective">
        <v-radio-group
          v-if="isRadiosOrChecked"
          v-model="radios"
          @change="sendRadios"
          :mandatory="false"
          class="mt-0 pt-0 ml-6"
        >
          <v-row v-for="(choice, index) in question.Choices" :key="index">
            <v-col>
              <v-radio :label="choice.choice" :value="choice.order"></v-radio>
            </v-col>
          </v-row>
        </v-radio-group>
        <v-checkbox
          class="mt-0 pt-0 ml-6"
          v-else
          v-for="(choice, index) in question.Choices"
          :key="index"
          :label="choice.choice"
          v-model="checked"
          :value="choice.order"
          :disabled="disabled && checked.indexOf(choice.order) === -1"
        ></v-checkbox>
      </div>
      <div v-else class="ma-0 pa-0">
        <v-textarea
          class="mt-4 mx-6"
          full-width
          outlined
          rounded
          v-model="answers[0]"
          @input="sendAnswersSubjective"
        >
        </v-textarea>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    question: Object,
    count: Number,
    examId: [Number, String],
  },
  data() {
    return {
      radios: null,
      checked: [],
      answers: [],
    };
  },
  computed: {
    isRadiosOrChecked() {
      return this.question.numberOfAnswer == 1 ? true : false;
    },
    isObjective() {
      return this.question.questionType == "ปรนัย" ? true : false;
    },
    disabled() {
      if (this.checked.length >= this.question.numberOfAnswer) {
        let data = this.mapObjectInArray(this.checked);
        this.$emit("sendCheckBoxEvent", data);
        return true;
      } else return false;
    },
    showImage() {
      return !!this.question.Image;
    },
    showNumberOfAnswers() {
      return this.isObjective && !this.isRadiosOrChecked
        ? `(ตอบ ${this.question.numberOfAnswer} ข้อ)`
        : "";
    },
  },
  methods: {
    mapObjectInArray(arr) {
      return arr.map((el) => ({
        answer: el,
        questionId: this.question.questionId,
        examId: this.examId,
      }));
    },
    setNullData() {
      this.checked = [];
      this.radios = null;
      this.answers = [];
    },
    sendAnswersSubjective() {
      if (this.answers[0].length > 0) {
        let data = this.answers.map((el) => ({
          answer: el,
          questionId: this.question.questionId,
          examId: this.examId,
          isChecking: false,
        }));
        this.$emit("sendAnswersSubjective", data);
      }
    },
    sendRadios(event) {
      let data = [];
      data.push({
        answer: event,
        questionId: this.question.questionId,
        examId: this.examId,
      });
      this.$emit("sendRadiosEvent", data);
    },
  },
};
</script>

<style></style>
