import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import {listSortByNewest, listSortByVotes} from './actions';

const PostList = ({ list, listSortByNewest, listSortByVotes }) => (
  <div>
    <h3>{list.length} posts</h3>
    <button onClick={() => listSortByNewest()}>Sort by newest</button>
    <button onClick={() => listSortByVotes()}>Sort by votes</button>
    
    <hr/>
    
    {list.map(post => <PostItem key={post.id} {...post}/>)}
  </div>
);

export default connect(state => state.postList, 
  {listSortByNewest, listSortByVotes})(PostList);
