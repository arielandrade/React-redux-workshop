import React from 'react';
import { connect } from 'react-redux';
import { commentChange, commentSubmit } from './actions';

const CommentInput = ({postID, description, commentChange, commentSubmit}) => (
  <div>
    <label>New comment: </label><br />
    <input type="text" 
      value={description} 
      onChange={e => commentChange(e.target.value)}/>
    <button 
      onClick={() => commentSubmit({ id: postID, description: description })}>
      Submit
    </button>       
  </div>
);

export default connect(state => state.commentInput, {
  commentChange,
  commentSubmit
})(CommentInput);
