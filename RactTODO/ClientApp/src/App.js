import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import WorkersContainer from './containers/WorkersContainer';
import WorkerEdit from './containers/WorkerEditComponent';
import Layout from './components/Layout';

const App = () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/workers/:workId" component={WorkerEdit} />
            <Route path="/workers" component={WorkersContainer} />
        </Switch>
    </Layout>
);

export default App;