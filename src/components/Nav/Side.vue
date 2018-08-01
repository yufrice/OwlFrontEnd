<template>
  <v-navigation-drawer
    v-model="active"
    fixed
    app
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
     {{drawer()}}
        <v-list-tile slot="activator">
          <v-list-tile-title>Admin</v-list-tile-title>
        </v-list-tile>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SideNav extends Vue {
  private active = false;
  private drawer() {
    this.active = this.$store.state.drawer.active;
  }
}
</script>