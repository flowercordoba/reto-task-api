import mongoose from 'mongoose';
import { config } from '@root/config';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.info('Successfully connected to database.');
      })
      .catch((error) => {
        console.error('Error connecting to database', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};