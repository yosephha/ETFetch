import React from 'react';
import { connect } from 'react-redux';
import Home from './home_index';
import { fetchEtf } from '../../actions/etf_action';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchEtf: (sym) => dispatch(fetchEtf(sym))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
