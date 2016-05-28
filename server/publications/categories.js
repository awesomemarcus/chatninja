import { Categories, Products } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.publish('categoriesList',  () => {

    return [
      Categories.find(),
      Products.find(),
    ];

  });

  Meteor.publish('categoriesSingle',  (category_id)  => {

    check(category_id, String);

    return Categories.find({_id:category_id});

  });

}
