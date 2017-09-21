import React from 'react';
import { connect } from 'react-redux';
import Home from './home_index';
import { fetchEtf } from '../../actions/etf_action';
import { fetchHistories } from '../../actions/history_action';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  const hitories = fetchHistories(state.session.currentUser.id)
  return ({
    currentUser: state.session.currentUser,
    histories: state.history.history,
    etf: state.etf,
    errors: state.etf[0]
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchEtf: (sym) => dispatch(fetchEtf(sym)),
    fetchHistories: (user_id) => dispatch(fetchHistories(user_id)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
