<template>
  <v-container id="home" fluid>
    <v-row class="mx-1">
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col cols="8" class="pt-0">
        <div class="content">
          <v-row>
            <v-col cols="12"><WelcomeCard /></v-col>
          </v-row>
          <v-row>
            <v-col cols="12"><ExaminationLists /></v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="2">
        <AccountDrawer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import AccountDrawer from "@/components/AccountDrawer.vue";
import WelcomeCard from "@/components/WelcomeCard.vue";
import ExaminationLists from "@/components/ExaminationLists.vue";

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    AccountDrawer,
    WelcomeCard,
    ExaminationLists,
  },
};
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
  color: black;
  // background-image: url("./../assets/login/pexels-buro-millennial-1438081.png");
  background-image: linear-gradient(
    226deg,
    rgba(26, 115, 232, 0.52),
    rgba(127, 216, 88, 0.73)
  );
  .content {
    margin: 0;
    padding: 0;
  }
}
</style>
