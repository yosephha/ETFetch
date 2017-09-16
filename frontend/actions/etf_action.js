import * as APIUtil from '../util/etf_util';

export const RECIVE_ETF = 'RECIVE_ETF';

export const reciveEtf = etf => ({
  type: RECIVE_ETF,
  etf
});

export const fetchEtf = (symbol) => dispatch => (
  APIUtil.fetchEtf(symbol)
  .then((etf) => dispatch(reciveEtf(etf)))
);
