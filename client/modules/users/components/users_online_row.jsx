import React from 'react';

class UsersOnlineRow extends React.Component{
 handleUserClick(e){
  e.preventDefault();
  this.props.onUserClick(this.props.user);
 }
 render(){

  const {user, notifCount} = this.props;
  return(
   <li>
    <a className="list-group-item" href="#" onClick={this.handleUserClick.bind(this)}>
    <img src={user.profile.avatar} alt="" className="img-responsive pull-left" />
    <h4>{user.profile.username} {(notifCount > 0) ?<span className="badge"><b> {notifCount} </b></span>: ''}</h4>
    </a>
   </li>
  );
}
}

export default UsersOnlineRow;
