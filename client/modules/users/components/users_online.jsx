import React from 'react';
import UsersOnlineRow from './users_online_row.jsx';

class UsersOnline extends React.Component{

 handleUserClick(recipientId){

  this.props.onhandleRecipientId(recipientId);

 }

 render(){

  const {onlineUsers} = this.props;

  return(
   <ul className="nav list-group">
    {onlineUsers.map( user => (
     <UsersOnlineRow onUserClick={this.handleUserClick.bind(this)} key={user._id} user={user} />
    ))}

   </ul>
  );
 }
}

export default UsersOnline;
