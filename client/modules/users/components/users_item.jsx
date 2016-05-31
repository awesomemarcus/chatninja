import React from 'react';
import moment from 'moment';


class UsersList extends React.Component{
 render(){

  const {user} = this.props;

  return(
   <div>
    <a href="" className="user-thumb">
      <div className="thumbnail avatar-lg" >
          <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" className="img-responsive"/>
        <div className="caption" style={{textAlign: 'center'}}>
          <h3>{user.profile.username}</h3>
          {(user.status.online && !user.status.idle) ? <p style={{color: 'green'}}><strong>ACTIVE</strong></p> :
          (user.status.online && user.status.idle) ? <div><p style={{color: 'gold'}}><strong>IDLE</strong></p>
          <p>Last Activity: {moment(user.status.lastActivity).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p></div> :
          <p style={{color: 'gray'}}><strong>OFFLINE</strong></p>
          }
        </div>
      </div>
    </a>
   </div>
  );
 }
}

export default UsersList;
