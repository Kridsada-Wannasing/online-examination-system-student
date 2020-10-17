<template>
  <div id="loginPage">
    <v-container fluid>
      <v-row align-content="center" justify="center">
        <v-col cols="6"></v-col>
        <v-col cols="4">
          <div class="content">
            <v-card class="pa-5 text-center form--login rounded-xl">
              <v-card-title
                class="mt-3 mx-5 p-5  d-flex  flex-column justify-center"
              >
                <v-img
                  class="logo-img"
                  src="./../assets/login/Group 431.png"
                  max-width="250"
                >
                </v-img>
              </v-card-title>
              <v-card-subtitle class="mt-4 form--login--subtitle">
                Welcome back! Please login to your account.
              </v-card-subtitle>
              <v-form v-model="valid" class="mx-5 pa-5">
                <div v-if="!showForgot" class="ma-0 pa-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    label="Password"
                    required
                  ></v-text-field>
                </div>
                <div v-else class="ma-0 pa-0">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                </div>
                <div class="d-flex align-center justify-space-between my-5">
                  <v-checkbox
                    v-model="checkbox"
                    label="Remember me"
                  ></v-checkbox>
                  <v-btn
                    v-if="showForgot"
                    text
                    class="form--login--btnforgot"
                    @click="showForgot = !showForgot"
                    >Login</v-btn
                  >
                  <v-btn
                    v-else
                    text
                    class="form--login--btnforgot"
                    @click="showForgot = !showForgot"
                    >Forgot Password</v-btn
                  >
                </div>

                <v-btn
                  v-if="!showForgot"
                  rounded
                  class="form--login--btn mt-10"
                  depressed
                  @click="login"
                  >Login</v-btn
                >
                <v-btn
                  v-else
                  rounded
                  class="form--login--btn mt-10"
                  depressed
                  @click="forgotPassword"
                  >Forgot Password</v-btn
                >
              </v-form>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { forgotPassword } from "../api/services/student";
export default {
  name: "loginPage",
  data() {
    return {
      fluid: true,
      outlined: true,
      email: "",
      password: "",
      checkbox: false,
      showForgot: false,
      // Validate Section
      valid: false,
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        return alert("คุณยังไม่ได้ใส่อีเมลหรือรหัสผ่าน");
      }
      this.$store
        .dispatch("student/login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Welcome" });
        })
        .catch((err) => alert(err.response.data.message));
    },
    forgotPassword() {
      if (!this.email) {
        return alert("กรุณาใส่อีเมล");
      }
      forgotPassword({ email: this.email })
        .then((response) =>
          alert(`${response.data.status}: ${response.data.message}`)
        )
        .catch((error) => alert(`${error.response.data.message}`));
    },
  },
};
</script>

<style lang="scss" scoped>
#loginPage {
  min-height: 100vh;
  color: black;
  // background-image: url("./../assets/login/pexels-buro-millennial-1438081.png");
  background-image: linear-gradient(
      226deg,
      rgba(26, 115, 232, 0.52),
      rgba(127, 216, 88, 0.73)
    ),
    url("./../assets/login/pexels-buro-millennial-1438081.png");
  background-position: top right;

  .content {
    opacity: 1;

    .form--login {
      border: none;
      color: #646d82;

      &--subtitle {
        font-size: 15px;
        color: #afb6c6;
      }

      &--btnforgot {
        text-transform: none;
      }
      &--btn {
        color: white;
        height: 50px;
        background-color: #7fd858 !important;
        font-size: 18px;
      }
    }
  }
  // .form--
}
</style>
