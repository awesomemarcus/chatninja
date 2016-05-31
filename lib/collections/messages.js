import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Messages = new Mongo.Collection('messages');

export const MessageSchem = new SimpleSchema({
 messageId: {
  type: String,
 },
 message: {
  type: String,
  min: 1,
 },
 fromUser: {
  type: String,
 },
 read: {
  type: Boolean,
 },
 createdAt: {
  type: Date,
 },
})

export default Messages;
