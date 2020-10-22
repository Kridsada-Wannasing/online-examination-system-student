<template>
  <v-container id="home" fluid>
    <v-row class="mx-1">
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col cols="8" class="pt-0">
        <router-view />
      </v-col>
      <v-col cols="2">
        <AccountDrawer
          v-if="!isShowNotification"
          :isShowNotification="isShowNotification"
          @showingNotification="isShowing"
        />
      </v-col>
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
  data() {
    return {
      isShowNotification: false,
    };
  },
  methods: {
    isShowing(event) {
      this.isShowNotification = event;
    },
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
