<template>
  <v-flex xs10 offset-sm1>
    <v-card>
      <v-card-actions>
      <v-form>
        <v-text-field
          label="Search"
        />
        <v-text-field
          label="Dummy"
        />
        <v-text-field
          label="Dummy"
        />
        <v-text-field
          label="Dummy"
        />
        <v-btn
        >
          Search
        </v-btn>
      </v-form>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SearchForm extends Vue {}
</script>

