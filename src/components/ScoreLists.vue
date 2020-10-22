<template>
  <v-card id="score" class="rounded-xl">
    <v-container class="px-8">
      <v-row>
        <v-col>
          <p>ผลคะแนนสอบ</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="scores" class="elevation-0">
            <template v-slot:item.score="{ item }">
              {{ item.isCompleted == true ? item.score : "ยังไม่สมบูรณ์" }}
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  created() {
    this.$store.dispatch("score/getScoresForStudent");
  },
  computed: {
    ...mapState("score", ["scores"]),
  },
  data() {
    return {
      headers: [
        {
          text: "ชื่อวิชา",
          align: "start",
          value: "subjectName",
          sortable: false,
        },
        {
          text: "รหัสวิชา",
          sortable: false,
          value: "subjectId",
        },
        {
          text: "การสอบ",
          sortable: false,
          value: "examType",
        },
        {
          text: "ภาคเรียน",
          sortable: false,
          value: "term",
        },
        {
          text: "ปีการศึกษา",
          sortable: false,
          value: "year",
        },
        {
          text: "คะแนนเต็ม",
          sortable: false,
          value: "sum",
        },
        {
          text: "คะแนนที่ได้",
          sortable: false,
          value: "score",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#score {
  min-height: 49vh;
}
</style>
