import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchEtfs, fetchEtf } from './util/etf_util'
import {fetchHistories} from './util/history_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.fetchEtfs = fetchEtfs;
  window.fetchEtf = fetchEtf;
  window.fetchHistories = fetchHistories;
});
