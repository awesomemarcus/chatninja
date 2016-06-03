import React from 'react';

class UsersOnlineRow extends React.Component{
 handleUserClick(e){
  e.preventDefault();
  this.props.onUserClick(this.props.user._id);
 }
 render(){

  const {user, notifCount} = this.props;
  return(
   <li>
       <a className="list-group-item" href="#" onClick={this.handleUserClick.bind(this)}>{user.profile.username} <b>{(notifCount > 0) ? notifCount : ''}</b></a>
   </li>
  );
 }
}

export default UsersOnlineRow;
