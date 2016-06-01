import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'messagesSend'(messageData) {
     check(messageData, Object);

     Messages.insert(messageData);

     // const bulkOp = Messages.rawCollection().initializeUnorderedBulkOp();
     //
     // messageData.forEach(function(data){
     //  bulkOp.insert(data);
     // });
     //
     // bulkOp.execute()
    },
  });
}
