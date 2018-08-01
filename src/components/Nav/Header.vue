<template>
<v-toolbar
  color="white darken-3"
  app
  fixed
>
    <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HeadNav extends Vue {
  private toggle() {
    return this.$store.commit('toggle');
  }
}
</script>