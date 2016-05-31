import React from 'react';

class ImagesUpload extends React.Component{

 handleUpload(){
  const {image} = this.refs;
  const {uploadImage} = this.props;

  var uploadedImage = (uploadImage(image.files[0]));

  image.value = '';

  // returns path of the uploaded image.
  console.log(uploadedImage);
 }

 render(){

  return(
   <div className="form-group">
     <input type="file" ref="image" id="image" name="" className="form-control" accept="image/*" onChange={this.handleUpload.bind(this)}/>
   </div>
  );
 }
}

export default ImagesUpload;
