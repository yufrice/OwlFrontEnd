import { ItemCard } from '@/components/Molecules';
import { Item } from '@models/app';
import Styled from 'styled-components';

import * as React from 'react';
import * as Type from './type';

export class SearchResult extends React.PureComponent<Type.IProps> {
  public render() {
    const itemList = (item: Item) => {
      return <ItemCard key={item.id} title={item.name} image={item.image} />;
    };
    if ('found' === this.props.searchState) {
      return (
        <StyledGrid>
          {this.props.items ? this.props.items.map(itemList) : null}
        </StyledGrid>
      );
    } else if ('notFound' === this.props.searchState) {
      return <div> not found </div>;
    } else if (Type.isProcessing(this.props.searchState)) {
      return <div> loading </div>;
    } else if ('error' === this.props.searchState) {
      return <div> error </div>;
    } else if (Type.isInit(this.props.searchState)) {
      return null;
    }
    return null;
  }
}

const StyledGrid = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px
`;
