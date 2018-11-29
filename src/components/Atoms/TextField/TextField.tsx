import _TextField from '@material-ui/core/TextField';
import * as React from 'react';

export const TextField: React.SFC<any> = (props: any) => (
  <_TextField
    {...props.input}
    type={props.type}
    label={props.label}
    autoComplete={props.autoComplete}
    {...props.custom}
  />
);
