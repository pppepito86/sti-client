import React from 'react'
import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'
import PageTemplate from './pages/PageTemplate'

export default () => (
    <Router>
        <Switch>
            <Route path="/task/:tid(\d+)/submission/:sid(\d+)" render={() => <PageTemplate content="submission"/>}/>
            <Route path="/task/:tid(\d+)/pdf" render={() => <PageTemplate content="pdf"/>}/>
            <Route path="/task/:tid(\d+)" render={() => <PageTemplate content="task"/>}/>
            <Route path="/scoreboard/:gid" render={() => <PageTemplate content="scoreboard"/>}/>
            <Route path="/" render={() => <PageTemplate content="dashboard"/>}/>
            
            <Route render={() => <Redirect to="/task/1" />} />    
        </Switch>
    </Router>
    
);

export {};