<template>
  <v-container id="home" fluid>
    <v-row class="mx-1">
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col cols="8" class="pt-0">
        <v-row>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
        </v-row>
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

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    AccountDrawer,
  },
};
</script>

<style lang="scss" scoped></style>
