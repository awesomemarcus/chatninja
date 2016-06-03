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
   "status.lastLogin.date:": new Date(),
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
   avatar: '/avatar.png',
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
   avatar: '/avatar.png',
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
   avatar: '/avatar.png',
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
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user5@email.com',
  password: 'user12345',
  profile: {
   username: 'SamSmith',
   firstname: 'Sam',
   lastname: 'Smith',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user6@email.com',
  password: 'user12345',
  profile: {
   username: 'LadyGaga',
   firstname: 'Lady',
   lastname: 'Gaga',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user7@email.com',
  password: 'user12345',
  profile: {
   username: 'Roberto',
   firstname: 'Roberto',
   lastname: 'Magsakay',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user8@email.com',
  password: 'user12345',
  profile: {
   username: 'NoahMason',
   firstname: 'Noah',
   lastname: 'Mason',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user9@email.com',
  password: 'user12345',
  profile: {
   username: 'DanielLucas',
   firstname: 'Daniel',
   lastname: 'Lucas',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user10@email.com',
  password: 'user12345',
  profile: {
   username: 'OliviaWilde',
   firstname: 'Olivia',
   lastname: 'Wilde',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user11@email.com',
  password: 'user12345',
  profile: {
   username: 'Elizabeth',
   firstname: 'Elizabeth',
   lastname: 'Olsen',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user12@email.com',
  password: 'user12345',
  profile: {
   username: 'JackHammer',
   firstname: 'Jack',
   lastname: 'Hammer',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user13@email.com',
  password: 'user12345',
  profile: {
   username: 'AliceWonder',
   firstname: 'Alice',
   lastname: 'Wonderland',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user14@email.com',
  password: 'user12345',
  profile: {
   username: 'Madeline',
   firstname: 'Madeline',
   lastname: 'Summer',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user15@email.com',
  password: 'user12345',
  profile: {
   username: 'Matthew',
   firstname: 'Matthew',
   lastname: 'David',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user16@email.com',
  password: 'user12345',
  profile: {
   username: 'Joseph',
   firstname: 'Joseph',
   lastname: 'Estrada',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user17@email.com',
  password: 'user12345',
  profile: {
   username: 'CaptainAmerica',
   firstname: 'Steve',
   lastname: 'Rogers',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user18@email.com',
  password: 'user12345',
  profile: {
   username: 'IronMan',
   firstname: 'Tony',
   lastname: 'Stark',
   gender: "male",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user19@email.com',
  password: 'user12345',
  profile: {
   username: 'SueDude',
   firstname: 'Sue',
   lastname: 'Ramirez',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
 {
  email: 'user20@email.com',
  password: 'user12345',
  profile: {
   username: 'GracePoe',
   firstname: 'Grace',
   lastname: 'Poe',
   gender: "female",
   age: 18,
   avatar: '/avatar.png',
  },
 },
];
