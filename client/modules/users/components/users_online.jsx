import React from 'react';

class UsersOnline extends React.Component{
 render(){

  const {onlineUsers} = this.props;

  return(
   <ul className="nav list-group">
    {onlineUsers.map( user => (
     <li>
         <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>{user.profile.username}</a>
     </li>
    ))}

   </ul>
  );
 }
}

export default UsersOnline;
