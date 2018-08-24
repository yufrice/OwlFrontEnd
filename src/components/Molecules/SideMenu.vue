<template>
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
      <v-list-tile slot="activator">
        <v-list-tile-title>Admin</v-list-tile-title>
      </v-list-tile>

    </v-list-group>
  </v-list>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SideMenu extends Vue {}
</script>

