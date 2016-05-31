import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
// import faker from 'faker';


Meteor.startup(function(){

 if(Meteor.users.find().count() < 1){

  fixedData.forEach(function(data){
   Accounts.createUser(data);
  });

  Accounts.users.update({}, {$set: {
   "status.online": false,
   "status.idle": false,
  }}, {multi: true});

 }
});

const fixedData = [
 {
  email: 'user1@email.com',
  password: 'user12345',
  profile: {
   username: 'JohnDoe',
   firstname: 'John',
   lastname: 'Doe',
   gender: 'male',
   age: 18,
  },
 },
 {
  email: 'user2@email.com',
  password: 'user12345',
  profile: {
   username: 'ChrisBrown',
   firstname: 'Chris',
   lastname: 'Brown',
   gender: 'male',
   age: 18,
  },
 },
 {
  email: 'user3@email.com',
  password: 'user12345',
  profile: {
   username: 'MariaClara',
   firstname: 'Maria',
   lastname: 'Clara',
   gender: "female",
   age: 18,
  },
 },
 {
  email: 'user4@email.com',
  password: 'user12345',
  profile: {
   username: 'HarryPotter',
   firstname: 'Harry',
   lastname: 'Potter',
   gender: "male",
   age: 18,
  },
 },
 {
  email: 'user5@email.com',
  password: 'user12345',
  profile: {
   username: 'JuanDelaCruz',
   firstname: 'Juan',
   lastname: 'dela Cruz',
   gender: "male",
   age: 18,
  },
 },
];
