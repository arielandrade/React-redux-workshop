import { combineReducers } from 'redux';
import * as actionID from './action-list';

const emptyPost = {
  id: 0,
  title: '',
  description: '',
  date: null,
  votes: 0,
  comments: [],
};

const emptyComment = {
  id: 0,
  description: '',
  date: null
}

const max = (a, b) => (a > b ? a : b);
const getNewID = list => list.reduce((maxID, x) => max(maxID, x.id), 0) + 1;
const addComment = (list, description) => list.concat({ 
  id: getNewID(list), 
  date: new Date(), 
  description: description 
});

const postInput = (state = emptyPost, action) => {
  switch (action.type) {
    case actionID.INPUT_TITLE_CHANGE:
      return Object.assign({}, state, {title: action.argument});

    case actionID.INPUT_DESCRIPTION_CHANGE:
      return Object.assign({}, state, {description: action.argument});

    case actionID.INPUT_SUBMIT:
      return emptyPost;

    default:
      return state;
  }
};

const postEdit = (state = emptyPost, action) => {
  switch (action.type) {
    case actionID.EDIT_TITLE_CHANGE:
      return Object.assign({}, state, {title: action.argument});

    case actionID.EDIT_DESCRIPTION_CHANGE:
      return Object.assign({}, state, {description: action.argument});

    case actionID.EDIT_CONFIRM:
      return emptyPost;

    case actionID.EDIT_CANCEL:
      return emptyPost;

    case actionID.EDIT_SET_DATA:
      return action.argument;

    default:
      return state;
  }
};

const postList = (state = {list: []}, action) => {
  switch (action.type) {
    case actionID.INPUT_SUBMIT:
      return {list: [
          Object.assign({}, action.argument, {
            id: getNewID(state.list),
            date: new Date(),
            votes: 0,
            comments: [],
          }),
          ...state.list,
        ]};
        
    case actionID.ITEM_VOTE_UP:
      return {list: state.list.map( x => {
        if (x.id === action.argument)
          x.votes++;
        return x
        })};
        
    case actionID.ITEM_VOTE_DOWN:
      return {list: state.list.map( x => {
        if (x.id === action.argument)
          x.votes--;
        return x
        })};
        
    case actionID.ITEM_DELETE:
      return { list: state.list.filter( x => x.id !== action.argument )} ;
      
    case actionID.LIST_SORT_NEWEST:
      return { list: state.list.slice().sort( (a, b) => b.date - a.date ) };

    case actionID.LIST_SORT_VOTES:
      return { list: state.list.slice().sort( (a, b) => b.votes - a.votes ) };
      
    case actionID.EDIT_CONFIRM:
      return { list: state.list.map( x => x.id === action.argument.id ? 
        Object.assign({}, x, action.argument) : x ) };

    case actionID.COMMENT_SUBMIT:
      return { list: state.list.map( x => x.id === action.argument.id ? 
        Object.assign({}, x, { comments: addComment(x.comments, action.argument.description) }) : 
        x ) };

    default:
      return state;
  }
};

const commentInput = ( state = emptyComment, action ) => {
  switch (action.type) {
    case actionID.COMMENT_CHANGE:
      return Object.assign({}, state, { description: action.argument })

    case actionID.COMMENT_SUBMIT:
      return emptyComment;
         
    default:
      return state;
  }
}

const commentList = ( state = [], action ) => {
  switch (action.type) {
      
    case actionID.COMMENT_LIST_SET_DATA:
      return action.argument;
    
    case actionID.COMMENT_SUBMIT:
      return addComment(state, action.argument.description);
    
    default:
      return state;
  }
}

const mainReducer = combineReducers({ postInput, postEdit, postList, commentInput, commentList });

export default mainReducer;
