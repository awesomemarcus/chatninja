import UsersSchema from '/lib/collections/users.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(()=>{
  Accounts.config({
    forbidClientAccountCreation: true,
});
  Accounts.onCreateUser((options, user) => {
           user.profile = {};
           user.profile.username = options["profile.username"];
           user.profile.firstname = options["profile.firstname"];
           user.profile.lastname = options["profile.lastname"];
           user.profile.gender = options["profile.gender"];
           user.profile.age = options["profile.age"];
           user.modifiedAt = options["modifiedAt"];
           user.createdAt = options["createdAt"];
           return user;
       });
});



export default function () {
  Meteor.methods({
    'usersLogin'(formData) {
      check(formData,Object);
      // let isValid = UsersSchema.namedContext("myContext").validate(formData,"email.$.address");
      // let isValid2 = UsersSchema.namedContext("myContext").validateOne(formData,"password");
      // check(formData,UsersSchema,(err)=>{
      //
      // });

    },
    'usersSignup'(formData) {
      check(formData,Object);
      let Checker =  UsersSchema.namedContext("myContext");
      let schemaNoError = Checker.validate(formData);

      if(!schemaNoError) {
          throw new Error("Please fill in the form correctly.");
      }
      Accounts.createUser({
       "email" : formData["emails.$.address"],
       "password" : formData["password"],
       "profile.username" : formData["profile.username"],
       "profile.firstname" :formData["profile.firstname"],
       "profile.lastname" : formData["profile.lastname"],
       "profile.gender" : formData["profile.gender"],
       "profile.age" : formData["profile.age"],
       modifiedAt : new Date(),
       createdAt : new Date(),
     });




    },
  });
}
