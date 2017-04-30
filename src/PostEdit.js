import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {
  editTitleChange,
  editDescriptionChange,
  editConfirm,
  editCancel,
  editSetData
} from './actions';

class PostEdit extends Component {
  
  //Agradezco cualquier cosa menos chota que esto para conectar el estado de un post a editar
  fetchData() {
    let postID = parseInt(this.props.match.params.id, 10);
    let list = this.props.postList.list;
    let obj = list.find( x => x.id === postID);
   
    if (obj === undefined){
      console.log("Error: item to edit was not found");
      console.log("Item to find: " + postID);
      console.log("List content: ");
      console.log(list);
    }
    else
      this.props.editSetData(obj);
  } 
  
  componentWillMount() {
    this.fetchData();
  }
  
  /*
  constructor(props) {
    super(props);
  }  
  */
  
  render(){
       
    const myProps = this.props.postEdit;
    const goHome = () => this.props.history.push("/");
    
    const confirm = () => {
      this.props.editConfirm({ 
        id: myProps.id, title: myProps.title, description: myProps.description 
        });
      goHome();     
    }
    
    return(
     <div>
    <h3>Edit post {myProps.id}</h3>
    <div>
      <label>Title: </label><br />
      <input type="text" 
        value={myProps.title} 
        onChange={e => this.props.editTitleChange(e.target.value)}/>
    </div>
    <div>
      <label>Description:</label><br />
      <textarea 
        value={myProps.description} 
        onChange={e => this.props.editDescriptionChange(e.target.value)}/>
    </div>
    <button onClick={() => confirm()}>Confirm</button>
    <button onClick={() => goHome()}>Cancel</button>    
  </div>);
  }
};

export default withRouter(connect(state => state, {
  editTitleChange,
  editDescriptionChange,
  editConfirm,
  editCancel,
  editSetData
})(PostEdit));
