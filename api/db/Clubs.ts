import { Schema, model } from 'mongoose';

const clubSchema = new Schema({
    clubName: {
        type: String,
        required: true,
    },
    enum: ['Social', 'Tech', 'Cultural', 'Sports', 'Other']
});

const User = model('User', clubSchema);

export default User;
