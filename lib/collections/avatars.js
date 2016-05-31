import {FS} from 'meteor/cfs:base-package';


const Avatars = new FS.Collection('Avatars', {
 stores:[new FS.Store.GridFS('Avatars')],
});

Avatars.allow({
 download: function(){
  return true;
 },
 insert(userId){
  if(userId){
   return true;
  }
 },
 update(userId){
  if(userId){
   return true;   
  }
 },
});


export default Avatars;
