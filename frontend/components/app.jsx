import React from 'react';
import FormContainer from './session_form/session_form_container';
import Home from './home/home_index_container';
import EtfDetail from './home/etf_detail_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div className='app-container'>
    <AuthRoute exact path="/login" component={FormContainer} />
    <AuthRoute exact path="/signup" component={FormContainer} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/etf/:id" component={EtfDetail} />
  </div>
);

export default App;
