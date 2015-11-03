import React from 'react';
import {Route} from 'react-router';
import Home from 'components/Home';

import App from 'components/index';

export default (
    <Route  name="app" component={App} path="/">
        <Route component={Home} path="home" />
    </Route>
);