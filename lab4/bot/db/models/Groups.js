var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  peer_id:  Number,
  week:
  {
    Monday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Tuesday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Wednesday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Thursday:
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Friday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Saturday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
  },
  oddWeek:
  {
    Monday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Tuesday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Wednesday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Thursday:
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Friday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
    Saturday: 
    [
        {
            number: Number,
            para:
            {
                name: String,
                room: String,
                lesson: String
            }
        } 
    ],
  }
  
});

const Groups = mongoose.model('Groups', schema);

module.exports = Groups;