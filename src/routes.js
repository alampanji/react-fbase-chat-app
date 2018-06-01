import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideMenu from './App/Components/SideMenu';
import Login from './App/Containers/Login';

const Routes = ()=>{
    return(
        <Router>
            <div style={{height:"100%"}}>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={SideMenu} />
                </Switch>
                
            </div>
        </Router>
    )
}

export default Routes;