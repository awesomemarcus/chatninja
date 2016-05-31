export default {
 Upload({FS, Bert, Collections}, file){
  if(file){
   const fsFile = new FS.File(file);

   var uploadVar = Collections.Avatars.insert(fsFile, (err) => {
    if(err){
     return 'error';
    }
   });

   return '/cfs/files/Avatars/' + uploadVar._id;

  }
 },
}
