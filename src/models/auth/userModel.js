import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name']
},
  email: {
    type: String,
    required: true,
    unique: [true, 'please provide an email'],
  },
  phone: {
    type: String,
    required: [true, 'please provide a phone number'],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
  },
});


export default mongoose.models.User || mongoose.model('User', userSchema )
