<template>
  <v-container id="home" fluid>
    <v-row class="mx-1">
      <v-col cols="2"><NavigationDrawer /></v-col>
      <v-col cols="8" class="pt-0">
        <v-row>
          <v-col cols="12"><div class="green">FSADGF</div></v-col>
          <v-col cols="12"></v-col>
        </v-row>
      </v-col>
      <v-col cols="2"><div class="blue">FSADG</div></v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import AccountDrawer from "@/components/AccountDrawer.vue";

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    AccountDrawer,
  },
};
</script>

<style scoped>
#home {
  background: transparent linear-gradient(227deg, #1a73e8 0%, #6ec448 100%) 0%
    0% no-repeat padding-box;
}
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
