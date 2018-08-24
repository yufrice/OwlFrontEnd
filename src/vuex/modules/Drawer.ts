import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module
export default class Drawer extends VuexModule {
  public active: boolean = false;

  @Mutation
  public sideNavToggle(): void {
    this.active = !this.active;
  }
}
