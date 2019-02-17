import React from 'react';
import {Route} from 'react-router';
import Home from './components/Home';
import WorkersContainer from './containers/WorkersContainer';
import WorkerEdit from './containers/WorkerEditComponent';
import Layout from './components/Layout'

export default () => (
    <Layout>
        <Route exact path='/' component={Home}/>
        <Route path="/workers" component={WorkersContainer}/>
        {/*  <Route path="/workers/new" component={PostsEdit}/>*/}
        <Route path="/worker/:workId" component={WorkerEdit}/>
    </Layout>
);
