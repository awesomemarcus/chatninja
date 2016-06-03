import React from 'react';
import DeleteModal from '../containers/delete_modal.js';
import ReactEmoji from 'react-emoji';

class MessagesListRow extends React.Component{

 render(){

  const {message, myId} = this.props;


  return(
    <li>
     {(myId == message.fromUser) ?
       <p className="bubble me"> {ReactEmoji.emojify(message.message)} <a href="#" style={{fontSize: '12px', color: 'lime'}} data-toggle="modal" data-target={"#myModal" + message._id}>delete</a></p> :
       <p className="bubble you">{ReactEmoji.emojify(message.message)} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target={"#myModal" + message._id}>delete</a></p>
     }
     <DeleteModal idToDelete={message._id}/>
    </li>
  );
 }
}

export default MessagesListRow;
