<template>
  <div
    id="welcome"
    class="h-100"
    style="border-radius: 20px; background-position: center;"
  >
    <div class="pa-10 h-100">
      <div style="height: 20%;">
        <h1 class="white--text">Welcome {{ student.firstName }}</h1>
      </div>
      <div style="height: 60%;" class="pt-15">
        <h3 class="mb-0 white--text" style="font-weight: 300;">
          We're edutest students platform,
        </h3>
        <span class="white--text" style="font-weight: 300;"
          >Hub for all of education test.</span
        >
      </div>
      <div
        class="pt-5"
        style="display: flex; justify-content: space-between; height: 20%;"
      >
        <span
          class="white--text"
          style="text-decoration: underline; font-weight: 400; font-size: 12px;"
          >View detail.</span
        >
        <img src="@/assets/home/Logo_white.svg" width="100px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: JSON.parse(localStorage.getItem("student")),
    };
  },
};
</script>

<style lang="scss" scoped>
#welcome {
  background-image: linear-gradient(
      203deg,
      rgba(26, 115, 232, 0.52),
      rgba(127, 216, 88, 0.73)
    ),
    url("./../assets/home/pexels-andrea-piacquadio-1.jpg");
}
</style>
