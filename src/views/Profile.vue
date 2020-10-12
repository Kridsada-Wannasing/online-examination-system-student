<template>
  <v-card class="profile rounded-xl mt-3">
    <v-card-title class="mx-5 pt-7">
      <span class="headline">แก้ไขข้อมูลส่วนตัว</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="ชื่อ"
              filled
              rounded
              dense
              hide-details
              v-model="profile.firstName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              filled
              rounded
              dense
              hide-details
              label="นามสกุล"
              v-model="profile.lastName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              filled
              rounded
              dense
              hide-details
              label="คณะ"
              persistent-hint
              v-model="profile.faculty"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              filled
              rounded
              dense
              hide-details
              label="ภาควิชา"
              v-model="profile.department"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="editProfile">
        บันทึก
      </v-btn>
      <v-btn color="blue darken-1" text @click="cancelEditProfile">
        ยกเลิก
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-divider></v-divider>
    </v-card-text>
    <v-card-title class="mx-5">
      <span class="headline">แก้ไขรหัสผ่าน</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="รหัสผ่านปัจจุบัน"
              filled
              rounded
              dense
              hide-details
              type="password"
              v-model="password.oldPassword"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              filled
              rounded
              dense
              hide-details
              label="รหัสผ่านใหม่"
              type="password"
              v-model="password.candidateNewPassword"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              filled
              rounded
              dense
              hide-details
              label="ยืนยันรหัสผ่านใหม่"
              type="password"
              v-model="password.confirmCandidateNewPassword"
              persistent-hint
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="editPassword">
        บันทึก
      </v-btn>
      <v-btn color="blue darken-1" text @click="clearPassword">
        ยกเลิก
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { updatePassword, updateMe } from "../api/services/student";
export default {
  data() {
    return {
      profile: {
        firstName: "",
        lastName: "",
        faculty: "",
        department: "",
      },
      password: {
        oldPassword: "",
        candidateNewPassword: "",
        confirmCandidateNewPassword: "",
      },
    };
  },
  methods: {
    editProfile() {
      updateMe(this.profile)
        .then(() => this.logout())
        .catch((error) => alert(error.response.data.message));
    },
    editPassword() {
      if (this.confirmCandidateNewPassword != this.candidateNewPassword) {
        return alert("รหัสผ่านใหม่กับยืนยันรหัสผ่านใหม่ไม่ตรงกัน");
      } else {
        updatePassword(this.password)
          .then(() => this.logout())
          .catch((error) => alert(error.response.data.message));
      }
    },
    logout() {
      this.$store.dispatch("student/logout");
    },
    cancelEditProfile() {
      this.initialize();
    },
    initialize() {
      this.profile = JSON.parse(localStorage.getItem("student"));
    },
    clearPassword() {
      this.password = {
        oldPassword: "",
        candidateNewPassword: "",
        confirmCandidateNewPassword: "",
      };
    },
  },
  created() {
    this.initialize();
  },
};
</script>
<style scoped></style>
