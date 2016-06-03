import React from 'react';
import ImagesUpload from '../../uploads/containers/images_upload.js';

class UsersProfile extends React.Component{
  render() {
    const {user} = this.props;

    return(
      // <div className="container">
      //   <h2>{user.profile.username}'s Profile</h2>
      //   <hr />
      //   <div className="col-sm-3 col-sm-offset-3">
      //       {user.profile.avatar ?
      //         <img src={user.profile.avatar} alt="" className="img-responsive"/> :
      //         <p>no photo</p>
      //       }
      //   </div>
      //   <div className="col-sm-6">
          // <p className="large-font"><span className="text-warning">Firstname:</span> {user.profile.firstname}</p>
          // <p className="large-font"><span className="text-warning">Lastname:</span> {user.profile.lastname}</p>
          // <p className="large-font"><span className="text-warning">Gender:</span> {user.profile.gender}</p>
          // <p className="large-font"><span className="text-warning">Age:</span> {user.profile.age}</p>
      //
          // {this.currentUserProfile() ?
          //   <ImagesUpload onUploadPhoto={this.changeAvatar.bind(this)}/>
          //   : ""}
      //
      //   </div>
      // </div>
      <div className="container marginTop">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-sm-offset-3 profile-final">
          <div className="thumbnail">
            <img src={user.profile.avatar} alt="Avatar" className="img-responsive" style={{maxWidth: '200px'}}/>
            <div className="caption">
              <h3>{user.profile.username}</h3>
              <p>Firstname: {user.profile.firstname}</p>
              <p>Lastname: {user.profile.lastname}</p>
              <p>Gender: {user.profile.gender}</p>
              <p>Age: {user.profile.age}</p>

              <div className="upload-btn">

              {this.currentUserProfile() ?
                <ImagesUpload onUploadPhoto={this.changeAvatar.bind(this)}/>
                : ""}

              </div>

            </div>
          </div>
        </div>
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

  changeAvatar(imgPath) {
    const {userUpdatePhoto} = this.props;
    userUpdatePhoto(imgPath)
  }

}

export default UsersProfile;
