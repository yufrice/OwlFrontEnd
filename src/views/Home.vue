<template>
  <v-container fluid fill-height>
    <Search/>
  </v-container>  
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Search from '@/components/Search.vue';

@Component({
  components: {
    Search,
  },
})
export default class Home extends Vue {}
</script>
