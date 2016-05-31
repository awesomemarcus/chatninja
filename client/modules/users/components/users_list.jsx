import React from 'react';
import UsersItem from './users_item.jsx'

class UsersList extends React.Component{
 render(){

  const {users} = this.props;

  return(
   <div>
    <div className="row">
      {users.map( user => (
        <div className="col-sm-6 col-md-4" key={user._id} >
          <UsersItem user={user} />
        </div>
      ))}
    </div>
   </div>
  );
 }
}

export default UsersList;
