import React from 'react';
import moment from 'moment';


class UsersList extends React.Component{
 render(){

  const {user} = this.props;

  return(
   <div>
    <a href="" className="user-thumb">
      <div className="thumbnail avatar-lg clearfix" >
          <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" className="img-responsive pull-left"/>
        <div className="caption pull-right" style={{textAlign: 'center'}}>
          <h4>{user.profile.username}
          {(user.status.online && !user.status.idle) ? <span style={{color: 'green'}} className="glyphicon glyphicon-one-fine-dot"></span> :
          (user.status.online && user.status.idle) ? <span style={{color: 'orange'}} className="glyphicon glyphicon-one-fine-dot"></span> :
          <span style={{color: 'gray'}} className="glyphicon glyphicon-one-fine-dot"></span>
          }
          </h4>
          {(user.status.online && user.status.idle) ?
            <p>Last Activity: {user.status.lastActivity}</p> :
            ""
          }
        </div>
      </div>
    </a>
   </div>
  );
 }
}

export default UsersList;
