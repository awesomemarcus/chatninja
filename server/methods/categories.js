import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(data) {
         check(data, Object);
         Categories.insert({
           name : data.name,
           modifiedAt : new Date(),
           createdAt : new Date(),
         });
    },
    'categoriesUpdate'(data) {
         check(data, Object);
         Categories.update({_id:data._id},{$set:{
           name : data.name,
           modifiedAt : new Date(),
           createdAt : new Date(),
         }});
    },
  });
}
