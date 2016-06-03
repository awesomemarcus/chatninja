import React from 'react';
import UsersItem from './users_item.jsx'

class UsersList extends React.Component{
 render(){

  const {users} = this.props;

  return(
   <div>
     <div className="container marginTop">
       <div className="row">
        <div className="col-md-12 ninja">
          <h2>All Ninjas</h2>
          <input type="text" className="form-control" placeholder="Search..."/>
        </div>
       </div>
      <div className="row">
        {users.map( user => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={user._id} >
            <UsersItem user={user} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
 }
}
export default UsersList;
