<template>
  <v-container id="enterToExamination" class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="3">
        <v-card color="transparent" elevation="0">
          <v-card-text class="text-center justify-center">
            <div class="d-flex justify-center">
              <div>
                <v-img
                  src="../assets/examination/Lock.svg"
                  max-width="50"
                ></v-img>
              </div>
            </div>
            <v-row class="mt-5">
              <v-col>
                <p class="white--text">ใส่รหัสเพื่อเข้าห้องสอบ</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  placeholder="รหัสเข้าสอบ"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  solo
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-btn
                  min-width="150"
                  rounded
                  class="success"
                  color="white"
                  @click="enter"
                  >เข้าห้องสอบ</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn
                  min-width="150"
                  rounded
                  outlined
                  color="red"
                  :to="{ name: 'Welcome' }"
                  >กลับ</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { enterToExamination } from "@/api/services/examination";
import { mapState } from "vuex";

export default {
  props: ["meetingId"],
  data() {
    return {
      examId: null,
      password: "",
    };
  },
  computed: {
    ...mapState("meeting", ["meeting"]),
  },
  methods: {
    enter() {
      let data = {
        meetingId: this.meetingId,
        password: this.password,
      };

      enterToExamination(data)
        .then((response) => {
          this.$router.push({
            name: "Examination",
            params: {
              meetingId: data.meetingId,
              examId: response.data.examId,
              subjectId: this.meeting.Subject.subjectId,
            },
          });
        })
        .catch((error) =>
          alert(`${error.response.data.status}: ${error.response.data.message}`)
        );
    },
  },
  mounted() {
    console.log(this.meeting);
  },
};
</script>

<style lang="scss" scoped>
#enterToExamination {
  background: url("./../assets/examination/Group 351.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
