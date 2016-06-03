import React from 'react';
import moment from 'moment';


class UsersList extends React.Component{
 render(){

  const {user} = this.props;
  const lastLogin = new Date();

  return(
   <div>
    <a href={"/chat/" + user._id} className="user-thumb">
      <div className="thumbnail avatar-lg clearfix" >

          <img src={user.profile.avatar} alt="" className="pull-left"/>

        <div className="caption pull-right" style={{textAlign: 'center'}}>
          <h4>{user.profile.username}

          {(user.status.online && !user.status.idle) ? <span style={{color: 'green'}} className="glyphicon glyphicon-one-fine-dot"></span> :
          (user.status.online && user.status.idle) ? <span style={{color: 'orange'}} className="glyphicon glyphicon-one-fine-dot"></span> :
          <span style={{color: 'gray'}} className="glyphicon glyphicon-one-fine-dot"></span>
          }
          </h4>

          {(user.status.idle && user.status.online) ?
            <p style={{fontSize: '12px'}}>active {moment(user.status.lastActivity).startOf().fromNow()}</p> :
            ''
          }

        </div>
      </div>
    </a>
   </div>
  );
 }
}

export default UsersList;
