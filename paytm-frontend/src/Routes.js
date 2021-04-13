import React from 'react'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import PaymentStatus from './PaymentStatus'
import App from './App'
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/status/:orderId" component={PaymentStatus} />
            </Switch>
        </Router>
    )
}

export default Routes
