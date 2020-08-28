const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: [true, 'Please provide first_name']
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, 'Please provide last_name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide email']
    },
    avatar: {
        type: String,
        required: [true, 'Please provide avatar']
    },
    slot: {
        type: Date,
        trim: true,
        required: [true, 'Please provide slot']
    },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User',UserSchema);