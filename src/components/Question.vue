<template>
  <v-row>
    <v-col cols="6" v-if="false"> </v-col>
    <v-col>
      <v-row>
        <v-col>
          <v-card-text>{{ count }}.{{ question.question }}</v-card-text>
        </v-col>
      </v-row>
      <v-radio-group v-model="radios" :mandatory="false" class="mt-0 pt-0 ml-6">
        <v-row v-for="(choice, index) in question.Choices" :key="index">
          <v-col>
            <v-radio :label="choice.choice" :value="choice.order"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    question: Object,
    count: Number,
    examId: Number,
  },
  data() {
    return {
      radios: null,
    };
  },
  watch: {
    radios() {
      let data = {
        answer: this.radios,
        examId: this.examId,
        questionId: this.question.questionId,
      };
      this.$emit("sendRadiosEventData", data);
    },
  },
};
</script>

<style></style>
