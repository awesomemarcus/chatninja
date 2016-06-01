import React from 'react';

class UsersOnlineRow extends React.Component{
 handleUserClick(e){
  e.preventDefault();
  this.props.onUserClick(this.props.user._id);
 }
 render(){

  const {user} = this.props;
  return(
   <li>
       <a className="list-group-item" href="#" onClick={this.handleUserClick.bind(this)}>{user.profile.username}</a>
   </li>
  );
 }
}

export default UsersOnlineRow;
