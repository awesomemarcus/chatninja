import React from 'react';
import UsersOnlineRow from './users_online_row.jsx';

class UsersOnline extends React.Component{

 handleUserClick(recipient){

  this.props.onhandleRecipientId(recipient);

 }

 getNotifications(messages, userId){
  var count = 0;

  messages.map(message => {
   if(message.fromUser == userId && message.read == false){
    count += 1;
   }
  })
  return count;
 }

 render(){

  const {onlineUsers, userMessages} = this.props;

  return(
   <ul className="nav list-group">
    {onlineUsers.map( user => (
      <UsersOnlineRow
       notifCount={this.getNotifications(userMessages, user._id)}
       onUserClick={this.handleUserClick.bind(this)} key={user._id} user={user} />
    ))}

   </ul>
  );
 }
}

export default UsersOnline;
