<template>
  <v-app id="app">
    <SideNav/>
    <HeadNav/>
    <v-content>
      <router-view/>
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
import HeadNav from '@/components/Organisms/Header.vue';
import SideNav from '@/components/Organisms/Side.vue';

@Component({
  components: {
    SideNav,
    HeadNav,
  },
})
export default class App extends Vue {}
</script>
