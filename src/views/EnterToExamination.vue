<template>
  <v-container id="enterToExamination" class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="3">
        <v-card color="transparent" elevation="0">
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  placeholder="Placeholder"
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
                  rounded
                  class="success"
                  color="white"
                  @click="enterToExamination"
                  >Login</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn rounded outlined class="red" color="white">Back</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["examinationId"],
  data() {
    return {
      password: "",
    };
  },
  methods: {
    enterToExamination() {
      let data = {
        examinationId: this.examinationId,
        password: this.password,
      };

      this.$store.dispatch("examination/enterToExamination", data);
    },
  },
};
</script>

<style lang="scss" scoped>
#enterToExamination {
  background: url("./../assets/examination/Group 351.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
