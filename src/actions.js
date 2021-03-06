import * as actionID from './action-list';

function baseDispatch(action, argument) {
  return dispatch => {
    dispatch({
      type: action,
      argument: argument,
    });
  };
}

//export const appSetEditData = x => baseDispatch(actionID.APP_SET_EDIT_DATA, x);

export const inputSubmit = x => baseDispatch(actionID.INPUT_SUBMIT, x);
export const inputTitleChange = x => baseDispatch(actionID.INPUT_TITLE_CHANGE, x);
export const inputDescriptionChange = x => baseDispatch(actionID.INPUT_DESCRIPTION_CHANGE, x);

export const editRequestData = x => baseDispatch(actionID.EDIT_REQUEST_DATA, x);
export const editSetData = x => baseDispatch(actionID.EDIT_SET_DATA, x);
export const editGetData = x => baseDispatch(actionID.EDIT_GET_DATA, x);
export const editConfirm = x => baseDispatch(actionID.EDIT_CONFIRM, x);
export const editCancel = x => baseDispatch(actionID.EDIT_CANCEL, x);
export const editTitleChange = x => baseDispatch(actionID.EDIT_TITLE_CHANGE, x);
export const editDescriptionChange = x => baseDispatch(actionID.EDIT_DESCRIPTION_CHANGE, x);

export const postVoteUp = x => baseDispatch(actionID.ITEM_VOTE_UP, x);
export const postVoteDown = x => baseDispatch(actionID.ITEM_VOTE_DOWN, x);
export const postDelete = x => baseDispatch(actionID.ITEM_DELETE, x);

export const listSortByNewest = x => baseDispatch(actionID.LIST_SORT_NEWEST, x);
export const listSortByVotes = x => baseDispatch(actionID.LIST_SORT_VOTES, x);

export const commentChange = x => baseDispatch(actionID.COMMENT_CHANGE, x);
export const commentSubmit = x => baseDispatch(actionID.COMMENT_SUBMIT, x);

export const commentListSetData = x => baseDispatch(actionID.COMMENT_LIST_SET_DATA, x);
