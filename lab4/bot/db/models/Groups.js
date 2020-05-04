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
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
    Tuesday: 
    [
        {
            number: Number,
            para:
            {
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
    Wednesday: 
    [
        {
            number: Number,
            para:
            {
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
    Thursday:
    [
        {
            number: Number,
            para:
            {
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
    Friday: 
    [
        {
            number: Number,
            para:
            {
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
    Saturday: 
    [
        {
            number: Number,
            para:
            {
                name: Array,
                room: Array,
                lesson: Array
            }
        } 
    ],
  }
  
});

const Groups = mongoose.model('Groups', schema);

module.exports = Groups;