import React from 'react'
import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SubmissionPage from './pages/SubmissionPage'
import ScoreboardPage from './pages/ScoreboardPage'


const ProtectedRoute = () => (
    <Router>
        <Switch>
            <Route path="/scoreboard/:gid" component={ScoreboardPage} />
            <Route path="/task/:tid(\d+)/submission/:sid(\d+)" component={SubmissionPage} />
            <Route path="/task/:tid(\d+)" component={Dashboard} />
            <Route path="/" component={Dashboard} />

            <Route render={() => <Redirect to="/task/1" />} />
        </Switch>
    </Router>
    
)

export default ProtectedRoute
