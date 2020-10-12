export const navigationDrawerLists = {
  data() {
    return {
      items: [
        { title: "หน้าหลัก", icon: "mdi-home", to: "/welcome" },
        { title: "แจ้งผลการสอบ", icon: "mdi-file-document", to: "/score" },
        {
          title: "แก้ไขข้อมูลส่วนตัว",
          icon: "mdi-pencil-box-outline",
          to: "/profile",
        },
      ],
    };
  },
};
