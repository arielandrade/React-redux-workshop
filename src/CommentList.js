import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { commentListSetData } from './actions';

const CommentItem = ({ date, description }) => (
  <p>
    <i>{date.toLocaleString()}</i><br/>
    <label>{description}</label>
  </p>
);

class CommentList extends Component {

  //Agradezco cualquier cosa menos chota que esto para conectar el estado de un post a editar
  fetchList() {
    let postID = this.props.postID;
    let list = this.props.postList.list;
    let obj = list.find( x => x.id === postID);
   
    if (obj === undefined){
      console.log("Error: item to edit was not found");
      console.log("Item to find: " + postID);
      console.log("List content: ");
      console.log(list);
    }
    else
      this.props.commentListSetData(obj.comments);
  }
  
  componentWillMount() {
    this.fetchList();
  }
  
  render(){
       
    const list = this.props.commentList;
       
    return(
      <div>
        <h3>{list.length} comments for post {this.props.postID}:</h3>
        <div>
          { list.map(x => (<CommentItem key={x.id} {...x} />)) }
        </div>   
      </div>
      );
  }
};

export default withRouter(connect(state => state, {
  commentListSetData
})(CommentList));
