<template>
  <v-card id="notification" max-width="350" height="670" class="rounded-xl">
    <v-card-text>
      <v-row align="center" class="mx-1 mt-2">
        <span>การแจ้งเตือนทั้งหมด</span>
        <v-spacer></v-spacer>
        <v-icon @click="hideNotification">mdi-close</v-icon>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row align="center" justify="center" class="mb-4">
        <v-btn-toggle mandatory background-color="white" tile>
          <v-btn x-small color="white" @click="meeting">
            นัดสอบ
          </v-btn>
          <v-btn x-small color="white" @click="updateMeeting">
            เลื่อนสอบ
          </v-btn>
          <v-btn x-small color="white" @click="score">
            ผลสอบ
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row dense v-if="page == 1">
        <v-col v-for="(meeting, index) in examinationDate" :key="index">
          <NotificationList :page="page" :object="meeting" :color="'primary'" />
        </v-col>
      </v-row>
      <v-row dense v-else-if="page == 2">
        <v-col v-for="(meeting, index) in postponeExaminationDate" :key="index">
          <NotificationList :page="page" :object="meeting" :color="'warning'" />
        </v-col>
      </v-row>
      <v-row dense v-else-if="page == 3">
        <v-col v-for="(score, index) in scores" :key="index">
          <NotificationList :page="page" :object="score" :color="'success'" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import NotificationList from "@/components/NotificationList";
import { mapState } from "vuex";
export default {
  components: {
    NotificationList,
  },
  props: {
    isShowNotification: Boolean,
  },
  data() {
    return {
      page: 1,
    };
  },
  created() {
    this.$store.dispatch("notification/getExaminationDate");
  },
  methods: {
    hideNotification() {
      this.$emit("hiddingNotification", !this.isShowNotification);
    },
    meeting() {
      this.$store
        .dispatch("notification/getExaminationDate")
        .then(() => (this.page = 1));
    },
    updateMeeting() {
      this.$store
        .dispatch("notification/getPostponeExaminationDate")
        .then(() => (this.page = 2));
    },
    score() {
      this.$store
        .dispatch("notification/getScoreNotification")
        .then(() => (this.page = 3));
    },
    isPage(bool) {
      return bool;
    },
  },
  computed: {
    ...mapState("notification", ["examinationDate", "postponeExaminationDate"]),
    ...mapState("notification", ["scores"]),
  },
};
</script>

<style></style>
