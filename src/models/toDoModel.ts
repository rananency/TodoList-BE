import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

const TodoSchema: Schema<ITodo> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<ITodo>("Todo", TodoSchema);
