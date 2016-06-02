import React from 'react';
import DeleteModal from './delete_modal.jsx';
import ReactEmoji from 'react-emoji';

const MessagesListRow = ({message, myId}) => (

  <li>
   {(myId == message.fromUser) ?
     <p className="bubble me"> {ReactEmoji.emojify(message.message)} <a href="#" style={{fontSize: '12px', color: 'lime'}} data-toggle="modal" data-target="#myModal">delete</a></p> :
     <p className="bubble you">{ReactEmoji.emojify(message.message)} <a href="#" style={{fontSize: '12px'}} data-toggle="modal" data-target="#myModal">delete</a></p>
   }
   <DeleteModal />
  </li>

);

export default MessagesListRow;
