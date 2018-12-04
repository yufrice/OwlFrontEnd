import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
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

/**
 * test date
 */
const rows = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'desc', numeric: false, disablePadding: false, label: 'Description' },
  { id: 'word', numeric: false, disablePadding: false, label: 'Word' },
  { id: 'image', numeric: false, disablePadding: false, label: 'imageURL' },
];

/**
 * local state
 * reduxにオリジナル ソートは逐次ここで非破壊処理
 */
interface IState {
  selected: [];
  order: 'asc' | 'desc';
  orderBy: 'id' | 'name' | 'word' | 'desc' | 'image';
  page: number;
  rowPerPage: 5;
}

export class ViewItem extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: [],
      order: 'asc',
      orderBy: 'id',
      page: 1,
      rowPerPage: 5,
    };
  }

  public render() {
    const ListRender = listRender(test);
    return (
      <StyledPaper>
        <Button color={'primary'} variant={'contained'}>
          Fetch
        </Button>
        <Button color={'secondary'} variant={'contained'}>
          Delete
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox />
              </TableCell>
              {rows.map((row) => {
                return (
                  <TableCell
                    key={row.id}
                    numeric={row.numeric}
                    padding={row.disablePadding ? 'none' : 'default'}
                  >
                    {row.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>{ListRender}</TableBody>
        </Table>
        <TablePagination
          component={'div'}
          rowsPerPage={this.state.rowPerPage}
          count={6}
          page={this.state.page}
          // tslint:disable-next-line:jsx-no-lambda
          onChangePage={() => {
            return;
          }}
        />
      </StyledPaper>
    );
  }

  // private handleSort = (event: React.EventHandler<any>, order: any) => {
  //   this.setState({ orderBy: order });
  //   if (this.state.orderBy === order && this.state.order === 'desc') {
  //     this.setState({ order: 'asc' });
  //   } else {
  //     this.setState({ order: 'desc' });
  //   }
  // };
}

const listRender = (items: Type.Item[]) =>
  0 !== items.length ? (
    items.map((row: Type.Item) => {
      return (
        <TableRow key={row.id + row.name}>
          <TableCell padding='checkbox'>
            <Checkbox />
          </TableCell>
          <TableCell scope='raw'> {row.id} </TableCell>
          <TableCell> {row.name} </TableCell>
          <TableCell> {row.desc} </TableCell>
          <TableCell> {row.word} </TableCell>
          <TableCell> {row.image} </TableCell>
          <TableCell>
            <IconButton>
              <Edit />
            </IconButton>
          </TableCell>
          <TableCell>
            <IconButton>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <> </>
  );

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 50px;
  margin: 10px;
`;
