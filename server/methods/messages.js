import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'messagesSend'(messageData) {
     const bulkOp = Messages.rawCollection().initializeUnorderedBulkOp();
     check(messageData, Array);

     messageData.forEach(function(data){
      bulkOp.insert(data);
     });

     bulkOp.execute(function(e, result){
      if(e){
       return console.log(e);
      }
      return console.log(result.toJSON())
     })
    },
  });
}
