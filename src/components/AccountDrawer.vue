<template>
  <v-card height="670" class="rounded-xl">
    <v-navigation-drawer class="d-flex justify-center">
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="56">
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-title align-self="center">
            <v-list-item-title
              ><v-badge
                color="red"
                dot
                bordered
                overlap
                offset-x="10"
                offset-y="10"
              >
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge></v-list-item-title
            >
          </v-list-item-title>
        </v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list>
      <v-list>
        <v-list-item class="px-7" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div>
          <v-btn class="btn-bg pa-5" large text block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.account = this.getMe;
  },
  computed: {
    ...mapGetters("student", ["getMe"]),
  },
};
</script>

<style scoped>
.btn-bg {
  background: #f46262 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 27px 27px;
}
</style>
