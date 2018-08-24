import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import drawer from '@/vuex/modules/Drawer';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    drawer,
  },
});
