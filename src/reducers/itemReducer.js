import { ADD_ITEM, REMOVE_ITEM } from '../constants/itemConstants';

export const itemReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return state;
        case REMOVE_ITEM:
            return state;
        default:
            return state;
    }
};
