import React from 'react';
import ImagesUpload from '../../uploads/containers/images_upload.js';

class UsersProfile extends React.Component{
  render() {
    const {profile} = this.props;

    return(
      <div className="container marginTop">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-sm-offset-3 profile-final">
          <div className="thumbnail">
            <img src={profile.profile.avatar} alt="Avatar" className="img-responsive" style={{maxWidth: '200px'}}/>
            <div className="caption">
              <h3>{profile.profile.username}</h3>
              <p>Firstname: {profile.profile.firstname}</p>
              <p>Lastname: {profile.profile.lastname}</p>
              <p>Gender: {profile.profile.gender}</p>
              <p>Age: {profile.profile.age}</p>

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
