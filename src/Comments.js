import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comments = ({match}) => {
  const postID = parseInt(match.params.id, 10);
  
  return (
     <div>
      <CommentInput postID={postID}/>
      <CommentList postID={postID}/>
    </div>
  );
}

export default withRouter(connect()(Comments));
