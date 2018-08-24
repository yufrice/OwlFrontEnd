<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <SearchForm/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SearchForm from '@/components/Molecules/SearchForm.vue';

@Component({
  components: {
    SearchForm,
  },
})
export default class Search extends Vue {}
</script>