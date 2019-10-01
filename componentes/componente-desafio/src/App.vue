<template>
  <v-app>
    <app-navigation />

    <app-toolbar />

    <v-content>
      <app-content />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Drawer from "@/components/template/Drawer";
import Footer from "@/components/template/Footer.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Content from "@/components/widgets/Content.vue";

export default {
  components: {
    "app-navigation": Drawer,
    "app-footer": Footer,
    "app-toolbar": Toolbar,
    "app-content": Content
  }
};
</script>
