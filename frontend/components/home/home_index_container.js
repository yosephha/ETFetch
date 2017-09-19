import React from 'react';
import { connect } from 'react-redux';
import Home from './home_index';
import { fetchEtf } from '../../actions/etf_action';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchEtf: (sym) => dispatch(fetchEtf(sym)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
