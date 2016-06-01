import React from 'react';

const MessagesListRow = ({message}) => (


  <li>
   {(Meteor.userId() == message.fromUser) ? <p className="bubble me">{message.message}</p> : <p className="bubble you">{message.message}</p> }

  </li>

);

export default MessagesListRow;
