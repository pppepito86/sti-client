import React from 'react'
import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'
import ScoreboardPage from './pages/ScoreboardPage'
import PageTemplate from './pages/PageTemplate'
import TaskContent from './components/TaskContent'
import SubmissionContent from './components/SubmissionContent'
import PdfContent from './components/PdfContent'

const ProtectedRoute = () => (
    <Router>
        <PageTemplate>
            <Switch>
                <Route path="/task/:tid(\d+)/submission/:sid(\d+)" component={SubmissionContent} />
                <Route path="/task/:tid(\d+)/pdf" component={PdfContent} />
                <Route path="/task/:tid(\d+)" component={TaskContent} />
                <Route path="/scoreboard/:gid" component={ScoreboardPage} />
                
                <Route render={() => <Redirect to="/task/1" />} />    
            </Switch>
        </PageTemplate>
    </Router>
    
)

export default ProtectedRoute
