import Button from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRowColumn from '@material-ui/core/TableRow';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';
import styled from 'styled-components';

import * as Type from '@models/app';

const test: Type.Item[] = [
  { id: 'id0', name: 'name', desc: 'desc', word: 'word', image: 'image' },
  { id: 'id1', name: 'name', desc: 'desc', word: 'word', image: 'image' },
  { id: 'id2', name: 'name', desc: 'desc', word: 'word', image: 'image' },
  { id: 'id3', name: 'name', desc: 'desc', word: 'word', image: 'image' },
  { id: 'id4', name: 'name', desc: 'desc', word: 'word', image: 'image' },
  { id: 'id5', name: 'name', desc: 'desc', word: 'word', image: 'image' },
];

export class ViewItem extends React.PureComponent<any> {
  public render() {
    const ListRender = listRender(test);
    return (
      <StyledPaper>
        <Button color={'primary'} variant={'contained'}>
          Fetch
        </Button>
        <Table>
          <TableBody>{ListRender}</TableBody>
        </Table>
      </StyledPaper>
    );
  }
}

const listRender = (items: Type.Item[]) =>
  0 !== items.length ? (
    <TableBody>
      {items.map((row: Type.Item) => {
        return (
          <TableRow key={row.id}>
            <TableRowColumn> {row.name} </TableRowColumn>
            <TableCell> {row.word} </TableCell>
            <TableCell> {row.desc} </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  ) : (
    <> </>
  );

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 50px;
  margin: 10px;
  width: 600px;
`;
