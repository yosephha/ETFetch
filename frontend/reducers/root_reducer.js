import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import EtfReducer from './etf_reducer';
import HistoryReducer from './history_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  etf: EtfReducer,
  history: HistoryReducer
});

export default RootReducer;
