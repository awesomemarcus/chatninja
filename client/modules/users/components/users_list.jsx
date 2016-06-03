import React from 'react';
import UsersItem from './users_item.jsx'

class UsersList extends React.Component{
 componentWillMount(){
  const {clearFilter} = this.props;

  clearFilter();
 }
 handleFilterText(){
  const {queryFilter} = this.props;
  const {search} = this.refs;

  const query = {"profile.username": {$regex: search.value, $options: 'i'}};

  queryFilter(query);

  }
 render(){

  const {users} = this.props;

  return(
   <div>
     <div className="container marginTop">
       <div className="row">
        <div className="col-md-12 ninja">
          <h2>All Ninjas</h2>
          <input type="text" ref="search" className="form-control" placeholder="Search..." onChange={this.handleFilterText.bind(this)}/>
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
