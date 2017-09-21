import * as APIUtil from '../util/history_util';

export const RECIVE_HISTORIES = 'RECIVE_HISTORIES';

export const reciveHistories = histories => ({
  type: RECIVE_HISTORIES,
  histories
});

export const fetchHistories = (user_id) => dispatch => (
  APIUtil.fetchHistories(user_id)
  .then((histories) => dispatch(reciveHistories(histories)))
);
