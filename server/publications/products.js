import {Meteor} from 'meteor/meteor';
import {Products, Categories} from '/lib/collections';

export default function () {

  Meteor.publish('productList',  () => {
    return [
      Products.find(),
      Categories.find(),
    ];
  });

}
