<template>
  <v-card id="meeting" class="rounded-xl">
    <v-container class="px-8">
      <v-row>
        <v-col>
          ห้องสอบ
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(meeting, index) in meetings"
          :key="index"
          cols="3"
          class="pa-4"
        >
          <MeetingCard :meeting="meeting" :index="index" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import MeetingCard from "../components/MeetingCard";

export default {
  components: {
    MeetingCard,
  },
  created() {
    this.$store.dispatch("meeting/getAllMeetingInStudent");
  },
  computed: {
    ...mapState("meeting", ["meetings"]),
  },
};
</script>

<style lang="scss">
#meeting {
  min-height: 49vh;
}
</style>
