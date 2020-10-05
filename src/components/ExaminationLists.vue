<template>
  <v-card id="examination" class="rounded-xl">
    <v-container class="px-8">
      <v-row>
        <v-col>
          ห้องสอบ
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(examination, index) in examinations"
          :key="index"
          cols="3"
          class="pa-4"
        >
          <ExaminationCard :examination="examination" :index="index" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ExaminationCard from "../components/ExaminationCard";

export default {
  components: {
    ExaminationCard,
  },
  created() {
    this.$store.dispatch("examination/getAllExaminations");
  },
  computed: {
    ...mapState("examination", ["examinations"]),
  },
};
</script>

<style lang="scss">
#examination {
  min-height: 49vh;
}
</style>
