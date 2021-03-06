import React from 'react';
import { Route } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskDetails from '../components/TaskDetails';

export default props => {
  if (!props.node || !props.colonyClient) {
    return 'Loading...';
  }
  return (
    <div>
      <Route path={`${props.match.path}/:taskId`} render={p => (
        <TaskDetails {...p} colonyClient={props.colonyClient} node={props.node} />
      )}/>
      <Route exact path={props.match.path} render={p => (
        <TaskList {...p} colonyClient={props.colonyClient} node={props.node} />
      )}/>
    </div>
  )
}
