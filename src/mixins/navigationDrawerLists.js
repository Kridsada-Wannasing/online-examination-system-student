export const navigationDrawerLists = {
  data() {
    return {
      items: [
        { title: "หน้าหลัก", icon: "mdi-home", to: "/welcome" },
        { title: "แจ้งผลการสอบ", icon: "mdi-file-document", to: "/score" },
        { title: "การแจ้งเตือน", icon: "mdi-bell-outline" },
        { title: "ห้องสอบ", icon: "mdi-pencil-box-outline" },
      ],
    };
  },
};
