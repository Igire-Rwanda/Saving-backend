
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  type: String,
  amount: Number,
  timestamp: { type: Date, default: Date.now }
});

const User1Schema = new Schema({
  name: String,
  email: String,
  transactions: [TransactionSchema]
});

const User1 = model('User1', User1Schema);

export default User1;
