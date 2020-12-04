const { Schema, model } = require('mongoose');
import bcrypt from 'bcryptjs';
import { registerVersion } from 'firebase';

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
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            ref: 'Role',
            type: Schema.Types.ObjectId
        }]

    },
    {
        timestamps: true,
        versionKey: false,
    }

);


userSchema.static.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.static.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

module.exports = model('User', userSchema);