import { IAuth } from '@auth/interfaces/auth.interface';
import { string } from 'joi';
import mongoose, { Schema } from 'mongoose';
import validator from 'validator';


const UserSchema: Schema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Invalid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    name: {
      type: String,
      required: true,
      maxlength: 30,
    },
    role:{
      type:[string],
      default:['user'],
      enum:['admin','user','seo','super','manager']
    }
  });
  
  export default mongoose.model<IAuth>('User', UserSchema);