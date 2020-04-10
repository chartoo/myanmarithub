import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Master from '../components/Master';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Master}/>
            <Route path='/home' component={Master}/>
        </Switch>
    </BrowserRouter>
);