import { Schema, model } from 'mongoose';

const clubSchema = new Schema({
    clubName: {
        type: String,
        required: true,
    },
    clubType: {
        type: String,
        enum: ['Social', 'Tech', 'Cultural', 'Sport', 'Others'],
        default: 'Social'
    },
});

const Club = model('Club', clubSchema);

export default Club;
