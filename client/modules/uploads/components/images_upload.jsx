import React from 'react';

class ImagesUpload extends React.Component{

 handleUpload(){
  const {image} = this.refs;
  const {uploadImage} = this.props;

  var uploadedImage = (uploadImage(image.files[0]));

  image.value = '';

  // returns path of the uploaded image.
  this.props.onUploadPhoto(uploadedImage);
 }

 render(){

  return(
     <span className="btn btn-default btn-file">
        Change Avatar
        <input type="file" ref="image" id="image" name="" className="form-control" accept="image/*" onChange={this.handleUpload.bind(this)}/>
     </span>
  );
 }
}

export default ImagesUpload;
