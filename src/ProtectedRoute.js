import React from 'react'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import Dashboard from './Dashboard'

const ProtectedRoute = () => (
    <Router>
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>
    
)

export default ProtectedRoute
