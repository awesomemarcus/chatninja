import {FS} from 'meteor/cfs:base-package';


const Avatars = new FS.Collection('Avatars', {
 stores:[new FS.Store.GridFS('Avatars')],
});

Avatars.allow({
 download: function(){
  return true;
 },
 insert(userId, doc){
  return true;
 },
 update(userId, doc, fields, modifier){
  return true;
 },
});


export default Avatars;
