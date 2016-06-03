import React from 'react';
import UsersOnlineRow from './users_online_row.jsx';

class UsersOnline extends React.Component{

 handleUserClick(recipientId){

  this.props.onhandleRecipientId(recipientId);

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
     <div>

      <UsersOnlineRow
       notifCount={this.getNotifications(userMessages, user._id)}
       onUserClick={this.handleUserClick.bind(this)} key={user._id} user={user} />
     </div>
    ))}

   </ul>
  );
 }
}

export default UsersOnline;
