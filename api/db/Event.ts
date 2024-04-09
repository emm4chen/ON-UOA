import mongoose, { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    club: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date:{
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    eventType: {
        type: String,
        enum : ['social','tech', 'cultural'],
        default: 'social'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
        maxLength: 200,
    }
     
});