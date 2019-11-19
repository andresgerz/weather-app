const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
            
        },
        birth: {
            type: Date
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        email: {
            type: String
        }

    }
)

module.exports = model('User', userSchema);