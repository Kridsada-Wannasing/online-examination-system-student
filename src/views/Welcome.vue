<template>
  <div class="content">
    <v-row>
      <v-col cols="12"><WelcomeCard /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"><MeetingLists /></v-col>
    </v-row>
  </div>
</template>

<script>
import WelcomeCard from "@/components/WelcomeCard.vue";
import MeetingLists from "@/components/MeetingLists.vue";
export default {
  components: {
    WelcomeCard,
    MeetingLists,
  },
};
</script>

<style></style>
