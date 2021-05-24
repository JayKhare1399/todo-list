import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare, faCoffee, faTrashAlt, faEdit,
} from '@fortawesome/free-solid-svg-icons';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faCheckSquare, faCoffee, faTrashAlt, faEdit);

const App = () => (
  <Router>
    <Route exact path={['/todo', '/']}>
      <Todo />
    </Route>
  </Router>
);

export default App;
