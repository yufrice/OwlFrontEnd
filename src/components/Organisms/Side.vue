<template>
  <v-navigation-drawer
    v-model="active"
    fixed
    app
  >
    {{drawer()}}
    <SideMenu/>
  </v-navigation-drawer>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SideMenu from '@/components/Molecules/SideMenu.vue';

@Component({
  components: {
    SideMenu,
  },
})
export default class SideNav extends Vue {
  private active = false;
  private drawer() {
    this.active = this.$store.state.drawer.active;
  }
}
</script>