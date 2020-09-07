<template>
  <v-container class="home" fluid>
    <v-row class="mx-1">
      <v-col cols="2"><div class="red">sadgh</div></v-col>
      <v-col cols="8" class="pt-0">
        <v-row>
          <v-col cols="12"><div class="green">FSADGF</div></v-col>
          <v-col cols="12"><div class="green">FSADGF</div></v-col>
        </v-row>
      </v-col>
      <v-col cols="2"><div class="blue">FSADG</div></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
div {
  min-height: 44vh;
}
.red {
  background-color: red;
  height: 100%;
}
.green {
  background-color: green;
  height: 100%;
}
.blue {
  background-color: blue;
  height: 100%;
}
</style>
