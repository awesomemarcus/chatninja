import React from 'react';
import moment from 'moment';


class UsersList extends React.Component{
 render(){

  const {users} = this.props;

  return(
   <div>
    {users.map( user => (
     <p>{user.profile.username} - {(user.status.online && !user.status.idle) ? <p>online</p> : (user.status.online && user.status.idle) ? <p>Last Activity: {moment(user.status.lastActivity).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> : <p>Offline</p>}</p>
    ))}
   </div>
  );
 }
}

export default UsersList;
