<template>
  <v-card class="profile rounded-xl mt-3">
    <v-card-title class="mx-5 pt-7">
      <span class="headline">แก้ไขข้อมูลส่วนตัว</span>
    </v-card-title>
    <v-form ref="profile" v-model="validProfile">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="ชื่อ"
                filled
                rounded
                dense
                required
                :rules="firstNameRules"
                v-model="profile.firstName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                rounded
                dense
                label="นามสกุล"
                required
                :rules="lastNameRules"
                v-model="profile.lastName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                rounded
                dense
                label="คณะ"
                required
                :rules="facultyRules"
                v-model="profile.faculty"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                rounded
                dense
                label="ภาควิชา"
                required
                :rules="departmentRules"
                v-model="profile.department"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="editProfile"
          :disabled="!validProfile"
        >
          บันทึก
        </v-btn>
        <v-btn color="blue darken-1" text @click="cancelEditProfile">
          ยกเลิก
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-card-text>
      <v-divider></v-divider>
    </v-card-text>
    <v-card-title class="mx-5">
      <span class="headline">แก้ไขรหัสผ่าน</span>
    </v-card-title>
    <v-form ref="password" v-model="validPassword">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="รหัสผ่านปัจจุบัน"
                filled
                rounded
                dense
                type="password"
                required
                :rules="oldPasswordRules"
                v-model="password.oldPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                filled
                rounded
                dense
                label="รหัสผ่านใหม่"
                type="password"
                required
                :rules="candidateNewPasswordRules"
                v-model="password.candidateNewPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                filled
                rounded
                dense
                label="ยืนยันรหัสผ่านใหม่"
                type="password"
                required
                :rules="confirmCandidateNewPasswordRules"
                v-model="password.confirmCandidateNewPassword"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="editPassword"
          :disabled="!validPassword"
        >
          บันทึก
        </v-btn>
        <v-btn color="blue darken-1" text @click="clearPassword">
          ยกเลิก
        </v-btn>
      </v-card-actions>
    </v-form>
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
      firstNameRules: [(v) => !!v || "กรุณาใส่ชื่อ"],
      lastNameRules: [(v) => !!v || "กรุณาใส่นามสกุล"],
      facultyRules: [(v) => !!v || "กรุณาใส่คณะ"],
      departmentRules: [(v) => !!v || "กรุณาใส่ภาควิชา"],
      password: {
        oldPassword: "",
        candidateNewPassword: "",
        confirmCandidateNewPassword: "",
      },
      oldPasswordRules: [(v) => !!v || "กรุณาใส่รหัสผ่านปัจจุบัน"],
      candidateNewPasswordRules: [(v) => !!v || "กรุณาใส่รหัสผ่านใหม่"],
      confirmCandidateNewPasswordRules: [
        (v) => !!v || "กรุณาใส่ยืนยันรหัสผ่านใหม่",
        () =>
          this.password.candidateNewPassword ===
            this.password.confirmCandidateNewPassword ||
          "รหัสผ่านใหม่กับยืนยันรหัสผ่านใหม่ไม่ตรงกัน",
      ],
      validProfile: false,
      validPassword: false,
    };
  },
  methods: {
    editProfile() {
      this.$refs.profile.validate();
      confirm("ต้องการเปลี่ยนแปลงโปรไฟล์หรือไม่") &&
        updateMe(this.profile)
          .then((response) => {
            alert(response.message);
            this.logout();
          })
          .catch((error) => alert(error.response.data.message));
    },
    editPassword() {
      this.$refs.password.validate();
      if (this.confirmCandidateNewPassword != this.candidateNewPassword) {
        return alert("รหัสผ่านใหม่กับยืนยันรหัสผ่านใหม่ไม่ตรงกัน");
      } else {
        confirm("ต้องการเปลี่ยนแปลงรหัสผ่านหรือไม่") &&
          updatePassword(this.password)
            .then((response) => {
              alert(response.message);
              this.logout();
            })
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
