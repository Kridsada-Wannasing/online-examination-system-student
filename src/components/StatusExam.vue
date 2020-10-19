<template>
  <v-card
    min-height="670"
    color="transparent"
    class="d-flex flex-column text-center px-8"
    elevation="0"
  >
    <div>
      <v-img src="./../assets/examination/Logo1_white.svg"> </v-img>
    </div>

    <div class="white--text text-xs mt-4">
      <p style="font-size:2.5rem;">{{ time }}</p>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    isSent: Boolean,
  },
  data() {
    return {
      countDownDate: new Date("Oct 3, 2020 23:23:23").getTime(),
      time: "",
    };
  },
  computed: {
    ...mapState("meeting", ["meeting"]),
  },
  mounted() {
    let countDown = setInterval(() => {
      let now = new Date().getTime();
      let distance = new Date(this.meeting.endExamDate).getTime() - now;
      // let distance = this.countDownDate - now;

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (hours < 10 && hours >= 0) {
        hours = `0${hours}`;
      }
      if (minutes < 10 && minutes >= 0) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10 && seconds >= 0) {
        seconds = `0${seconds}`;
      }

      this.time = `${hours}:${minutes}:${seconds}`;

      if (distance <= 0) {
        this.time = "00:00:00";
        this.$store
          .dispatch("score/sendExam", {
            examId: this.$route.params.examId,
            meetingId: this.$route.params.meetingId,
            subjectId: this.$route.params.subjectId,
          })
          .then((response) => {
            this.$router.push({
              name: "ReportScore",
              params: { score: response.score },
            });
            clearInterval(countDown);
          });
      } else if (this.isSent) {
        this.$emit("isTimeout", false);
        clearInterval(countDown);
      }
    }, 1000);
  },
  created() {
    this.$store.dispatch("meeting/getMeeting", this.$route.params.meetingId);
  },
};
</script>

<style></style>
