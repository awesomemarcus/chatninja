import React from 'react';

class UsersProfile extends React.Component{
  render() {
    const {user} = this.props;

    return(
      <div className="container">
        <h2>{user.profile.username}'s Profile</h2>
        <hr />
        <div className="col-sm-3">
          <div className="profile-pic-wrapper"></div>
        </div>
        <div className="col-sm-9">
          <p className="large-font"><span className="text-warning">Firstname:</span> {user.profile.firstname}</p>
          <p className="large-font"><span className="text-warning">Lastname:</span> {user.profile.lastname}</p>
          <p className="large-font"><span className="text-warning">Gender:</span> {user.profile.gender}</p>
          <p className="large-font"><span className="text-warning">Age:</span> {user.profile.age}</p>

          {this.currentUserProfile() ?
            <a href="/users/update/" className="btn btn-lg btn-default">Edit Profile</a>
            : <button className="btn btn-lg btn-warning">Block User</button>}

        </div>
      </div>
    );
  }

  currentUserProfile() {
    const {profileId, user} = this.props;

    var result = false;

    if(profileId === user._id){
      result = true;
    }

    return result;

  }
}

export default UsersProfile;
