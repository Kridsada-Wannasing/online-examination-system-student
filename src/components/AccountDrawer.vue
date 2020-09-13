<template>
  <v-card height="670" class="rounded-xl">
    <v-navigation-drawer class="d-flex justify-center">
      <v-list>
        <v-list-item class="mx-4 mt-2">
          <v-list-item-avatar size="56">
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-title
            ><v-badge
              color="red"
              dot
              bordered
              overlap
              offset-x="11"
              offset-y="11"
            >
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-list-item-title>
        </v-list-item>
        <v-list class="mx-4">
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
            <v-list-item-content>
              <v-list-item-title>
                ชื่อ
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ student.firstName }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content
              ><v-list-item-title>
                นามสกุล
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ student.lastName }}
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
        </v-list>
      </v-list>
      <!-- <template v-slot:append>
        <div>
          <v-btn class="btn-bg pa-5" large text block>Logout</v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      student: JSON.parse(localStorage.getItem("me")),
    };
  },
};
</script>

<style scoped>
.btn-bg {
  background: #f46262 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 27px 27px;
}
</style>
