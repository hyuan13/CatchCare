import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Signup from './components/signupPage'
import Login from './components/loginPage'

const Routes = (props) => (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/Login" component={Login}/>
        </div>
    </Router>
)
export default Routes;
