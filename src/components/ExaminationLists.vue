<template>
  <v-card id="examination" class="rounded-xl">
    <v-container class="px-8">
      <v-row>
        <v-col>
          ห้องสอบ
        </v-col>
      </v-row>
      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.examinations = this.getAllExaminations;
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
