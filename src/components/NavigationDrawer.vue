<template>
  <v-card height="670" class="rounded-xl">
    <v-navigation-drawer class="d-flex justify-center">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title mx-9 mt-6 mb-7">
            <v-img src="./../assets/home/Group 432.png" width="120"></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { navigationDrawerLists } from "@/mixins/navigationDrawerLists";

export default {
  name: "HelloWorld",
  mixins: [navigationDrawerLists],
  data: () => ({}),
};
</script>
