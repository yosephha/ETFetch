import React from 'react';
import FormContainer from './session_form/session_form_container';
import Home from './home/home_index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={FormContainer} />
    <AuthRoute exact path="/signup" component={FormContainer} />
    <ProtectedRoute exact path="/" component={Home} />
  </div>
);

export default App;
