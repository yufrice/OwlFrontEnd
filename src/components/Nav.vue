<template>
  <div>
    <SideNav/>
    <HeadNav/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HeadNav from '@/components/Nav/Header.vue';
import SideNav from '@/components/Nav/Side.vue';

@Component({
  components: {
    SideNav,
    HeadNav,
  },
})
export default class Nav extends Vue {}
</script>