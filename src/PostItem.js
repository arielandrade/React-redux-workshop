import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postVoteUp, postVoteDown, postDelete } from './actions';

const PostItem = ({
  id,
  title,
  description,
  date,
  votes,
  comments,
  postVoteUp,
  postVoteDown,
  postDelete
}) => (
  <div>
    <strong>{id}: </strong><label>{date.toLocaleString()}</label><br/>
    <strong>Title: </strong><label>{title}</label><br/>
    <strong>Description: </strong><label>{description}</label><br/>    
    <Link to={`/posts/${id}/comments`}>{`Comments: ${comments.length}`}</Link><br/>   
    <strong>Votes: </strong><label>{votes}</label><br/>
    <Link to={`/posts/${id}/edit`}>Edit</Link><br/>
    <button onClick={() => postVoteUp(id)}>+1</button>
    <button onClick={() => postVoteDown(id)}>-1</button>
    <button onClick={() => postDelete(id)}>Delete</button>  
    <p/>
  </div>
);

export default connect(null, {postVoteUp, postVoteDown, postDelete})(PostItem);
