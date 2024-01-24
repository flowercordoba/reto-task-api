import { IAuth } from '@task/interfaces/task.interface';
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  name: {
    type: String,
    required: true,
    maxlength: 30
  }
});

export default mongoose.model<IAuth>('User', UserSchema);
