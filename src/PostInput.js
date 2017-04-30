import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {
  inputTitleChange,
  inputDescriptionChange,
  inputSubmit,
} from './actions';

const PostInput = ({
  history,
  editing,
  title, 
  description, 
  inputTitleChange, 
  inputDescriptionChange, 
  inputSubmit,
}) => {
  
  const submit = x => {
    inputSubmit(x);
    history.push("/");
  }
  
  return (
    <div>
      <h3>New post</h3>
      <div>
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={e => inputTitleChange(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={e => inputDescriptionChange(e.target.value)}
        />
      </div>
      <button
        onClick={e => submit({ title: title, description: description })}
      >
        Submit
      </button>  
    </div>
  );
}

export default withRouter(connect(state => state.postInput, {
  inputTitleChange,
  inputDescriptionChange,
  inputSubmit
})(PostInput));
