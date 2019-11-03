import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { AuthProvider, AuthConsumer } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <AuthConsumer>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" component={Dashboard} />
        </Switch>
        </AuthConsumer>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
