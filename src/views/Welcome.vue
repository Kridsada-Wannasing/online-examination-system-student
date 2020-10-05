<template>
  <div class="content">
    <v-row>
      <v-col cols="12"><WelcomeCard /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"><ExaminationLists /></v-col>
    </v-row>
  </div>
</template>

<script>
import WelcomeCard from "@/components/WelcomeCard.vue";
import ExaminationLists from "@/components/ExaminationLists.vue";
export default {
  components: {
    WelcomeCard,
    ExaminationLists,
  },
};
</script>

<style></style>
