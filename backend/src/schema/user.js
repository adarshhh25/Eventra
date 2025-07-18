import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
     firstName: {
        type: String,
        required:  [true, 'Name is a required field.'],
        maxlength: 50
     },

     lastName: {
        type: String,
        maxlength: 50
     },

     email: {
        type: String,
        required:  [true, 'Email is a required field.'],
        unique: true
     },

     phone: {
        type: Number,
        required:  [true, 'Phone Number is a required field.'],
        unique: true,
        maxlength: 10
     },

     gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required:  [true, 'Please select a gender']
     },

     password: {
        type: String,
        required:  [true, 'Password is a required field.']
     }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;