import merge from 'lodash/merge';
import { RECIVE_ETF } from '../actions/etf_action';

const defaultState = {};

const EtfReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_ETF:
      const newEtf = merge({}, state, action.etf)
      return newEtf;
    default:
      return state;
  }
}

export default EtfReducer;
