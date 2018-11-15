import { Action } from 'redux';

export enum ActionType {
    openConfigView = 'OPEN_CONFIG_VIEW',
    closeConfigView = 'CLOSE_CONFIG_VIEW',
    changeTab = 'CHANGE_TAB',
};

interface IOpenConfigViewAction extends Action {
    type: ActionType.openConfigView,
};

const openConfigView = (): IOpenConfigViewAction => ({
    type: ActionType.openConfigView,
});


interface ICloseConfigViewAction extends Action {
    type: ActionType.closeConfigView,
};

const closeConfigView = (): ICloseConfigViewAction => ({
    type: ActionType.closeConfigView,
});

interface IChangeTab extends Action {
    type: ActionType.changeTab,
    payload: {
        index: number,
    },

};

export const changeTab = (e: React.ChangeEvent<HTMLElement>, index: number): IChangeTab => ({
    type: ActionType.changeTab,
    payload: {
        index,
    },
});

export type Type = IOpenConfigViewAction | ICloseConfigViewAction | IChangeTab;

export const actions = { openConfigView, closeConfigView, changeTab };