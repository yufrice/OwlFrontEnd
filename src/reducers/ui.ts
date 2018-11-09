import { ActionType, Type } from '@/action/ui';

export interface IUIState {
    configActive: boolean,
    tabIndex: number,
};


const initialState: IUIState ={
    configActive: false,
    tabIndex: 0,
};

export const uiReducer = (state: IUIState = initialState, action: Type): IUIState => {
    switch(action.type) {
        case ActionType.openConfigView:
            return {configActive: true, tabIndex: state.tabIndex};
        case ActionType.closeConfigView:
            return {configActive: false, tabIndex: state.tabIndex};
        case ActionType.changeTab:
            return {configActive: state.configActive, tabIndex: action.payload.index }
        default:
            return state;
    };
};
