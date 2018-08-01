<template>
  <v-app id="app">
    <Nav/>
    <v-content>
    <router-view></router-view>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {}
</script>
