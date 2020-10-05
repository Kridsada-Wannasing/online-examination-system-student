<template>
  <v-row>
    <!-- <v-col cols="6" v-if="question.Image.path">
      <v-img
        :src="`http://localhost:8000/static/${question.Image.path}`"
      ></v-img>
    </v-col> -->
    <v-col>
      <v-row>
        <v-col>
          <p style="font-size:4rem">{{ count }}.{{ question.question }}</p>
        </v-col>
      </v-row>
      <v-radio-group
        v-if="isRadiosOrChecked"
        v-model="radios"
        :mandatory="false"
        class="mt-0 pt-0 ml-6"
      >
        <v-row v-for="(choice, index) in question.Choices" :key="index">
          <v-col>
            <v-radio :label="choice.choice" :value="choice.choice"></v-radio>
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
        :value="choice.choice"
        :disabled="disabled && checked.indexOf(choice.choice) === -1"
      ></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    question: Object,
    count: Number,
    examId: Number,
    countAnswerOfQuestion: Object,
  },
  data() {
    return {
      radios: null,
      checked: [],
    };
  },
  watch: {
    radios() {
      let data = [];
      data.push({
        answer: this.radios,
        questionId: this.question.questionId,
        examId: this.examId,
      });
      this.$emit("sendRadiosEvent", data);
    },
  },
  computed: {
    isRadiosOrChecked() {
      return this.countAnswerOfQuestion.countAnswer == 1 ? true : false;
    },
    disabled() {
      if (this.checked.length >= this.countAnswerOfQuestion.countAnswer) {
        let data = this.mapObjectInArray(this.checked);
        this.$emit("sendCheckBoxEvent", data);
        return true;
      } else return false;
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
    },
  },
};
</script>

<style></style>
