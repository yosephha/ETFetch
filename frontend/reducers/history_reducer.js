import merge from 'lodash/merge';
import { RECIVE_HISTORIES } from '../actions/history_action';

const defaultState = {};

const HistoryReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_HISTORIES:
      const newHistory = merge({}, action.histories)
      return newHistory;
    default:
      return state;
  }
}

export default HistoryReducer;
