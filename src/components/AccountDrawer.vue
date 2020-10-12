<template>
  <v-card height="670" class="rounded-xl">
    <v-navigation-drawer class="d-flex ">
      <div class="ma-0 pa-0">
        <div class="ma-0 pa-0">
          <v-list>
            <v-list class="mx-4">
              <v-list-item>
                <v-list-item-content>
                  <h2 class="text">{{ student.firstName }}</h2>
                  <h2 class="text" style="font-weight: 300;">
                    {{ student.lastName }}
                  </h2>
                  <div
                    class="pa-1 pl-2 mt-4 white--text background"
                    style="border-radius: 20px; width: 130px"
                  >
                    EDUTEST |
                    <span style="font-size: 13px">Student</span>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    รหัสนักศึกษา
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ student.studentId }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content
                  ><v-list-item-title>
                    อีเมล
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ student.email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content
                  ><v-list-item-title>
                    คณะ
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ student.faculty }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content
                  ><v-list-item-title>
                    ภาควิชา
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ student.department }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list>
        </div>
        <div class="ma-0 pa-0">
          <v-list
            dense
            class="ma-0 pa-0 w-100"
            style="border-radius: 0px 0px 20px 20px;"
          >
            <v-list-item-group>
              <v-list-item color="red" style="background-color: #feebeb;">
                <v-list-item-content class="text-center">
                  <span style="color:#f44337;" @click="logout">
                    <v-icon
                      v-text="'mdi-logout'"
                      class="pr-2"
                      style="color: #f44337;"
                    ></v-icon
                    >Log out
                  </span>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: {
    isShowNotification: Boolean,
  },
  data() {
    return {
      student: {},
      isShow: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("student/logout");
    },
  },
  mounted() {
    this.student = JSON.parse(localStorage.getItem("student"));
  },
};
</script>

<style scoped>
.btn-bg {
  background: #f46262 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 27px 27px;
}
.background {
  background-color: #6ec448;
}
.text {
  color: #2680eb;
}
</style>
