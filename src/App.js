import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PostList from './PostList';
import PostInput from './PostInput';
import PostEdit from './PostEdit';
import Comments from './Comments';

const App = () => (
  <Router history={history}>
    <div>
      <ul>
        <li><Link to="/">Post list</Link></li>
        <li><Link to="/posts/add">Add post</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={PostList}/>
      <Route path="/posts/add" component={PostInput}/> 
      <Route path="/posts/:id/edit" component={PostEdit}/>
      <Route path="/posts/:id/comments" component={Comments}/>
      
    </div>
  </Router>
);

export default connect()(App);
