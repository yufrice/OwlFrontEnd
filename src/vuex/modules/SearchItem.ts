import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import * as I from '@/models/Item';
import * as S from '@/models/Search';

@Module
export default class SearchItem extends VuexModule {
  public searchText: S.SearchText;
  public featchItems: Array<I.FetchItem> = [];

  @Mutation
  public updateSearchText(searchText: S.SearchText) {
    this.searchText = searchText;
  }
}
