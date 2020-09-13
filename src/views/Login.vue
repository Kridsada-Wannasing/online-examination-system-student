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
                <v-text-field
                  v-model="Email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  class="mt-3"
                  v-model="Password"
                  :rules="passwordRules"
                  label="Password"
                  required
                ></v-text-field>
                <div class="d-flex align-center justify-space-between my-5">
                  <v-checkbox
                    v-model="checkbox"
                    label="Remember me"
                  ></v-checkbox>
                  <v-btn text class="form--login--btnforgot"
                    >Forgot Password</v-btn
                  >
                </div>

                <v-btn
                  rounded
                  class="form--login--btn mt-10"
                  depressed
                  @click="login"
                  >Login</v-btn
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
export default {
  name: "loginPage",
  data() {
    return {
      fluid: true,
      outlined: true,
      Email: "",
      Password: "",
      checkbox: false,

      // Validate Section
      valid: false,
      emailRules: [(v) => !!v || "Email is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("student/login", {
          email: this.Email,
          password: this.Password,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => console.log(err));
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
        width: 185px;
        height: 50px;
        background-color: #7fd858 !important;
        font-size: 18px;
      }
    }
  }
  // .form--
}
</style>
