import React from 'react'
import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'
import ScoreboardPage from './pages/ScoreboardPage'
import PageTemplate from './pages/PageTemplate'
import TaskContent from './components/TaskContent'
import SubmissionContent from './components/SubmissionContent'


const ProtectedRoute = () => (
    <Router>
        <Switch>
            <PageTemplate>
                <Route path="/scoreboard/:gid" component={ScoreboardPage} />
                <Route path="/task/:tid(\d+)/submission/:sid(\d+)" component={SubmissionContent} />
                <Route path="/task/:tid(\d+)" component={TaskContent} />

                <Route render={() => <Redirect to="/task/1" />} />
            </PageTemplate>
        </Switch>
    </Router>
    
)

export default ProtectedRoute
