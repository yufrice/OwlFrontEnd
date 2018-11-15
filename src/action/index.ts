import * as App from '@action/app';
import * as UI from '@action/ui';

export type Type = typeof App.actions & typeof UI.actions;

