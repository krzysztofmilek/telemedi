import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  id: Number,
  content: String,
  done: Boolean,
});


