import React from 'react';
import { connect } from 'react-redux';
import EtfDetail from './etf_detail';
import { fetchEtf } from '../../actions/etf_action';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ({
    currentUser: state.session.currentUser,
    sym: id,
    etf: state.etf
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
)(EtfDetail);
