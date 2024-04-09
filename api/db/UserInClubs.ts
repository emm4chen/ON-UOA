import mongoose, { Schema, model } from 'mongoose';

const userInClubsSchema = new Schema({
  club: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  role: {
    type: String,
    enum: ['Executive', 'Member'],
  },
});

const UserInClubs = model('UserInClubs', userInClubsSchema);

export default UserInClubs;
