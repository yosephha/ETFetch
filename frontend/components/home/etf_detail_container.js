import React from 'react';
import { connect } from 'react-redux';
import EtfDetail from './etf_detail';
import { fetchEtf } from '../../actions/etf_action';
import { fetchHistories } from '../../actions/history_action';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ({
    currentUser: state.session.currentUser,
    sym: id,
    etf: state.etf,
    errors: state.etf[0]
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchHistories: (user_id) => dispatch(fetchHistories(user_id)),
    fetchEtf: (sym) => dispatch(fetchEtf(sym))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EtfDetail);
