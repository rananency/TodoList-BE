import cron from "node-cron";
import Todo from "../models/toDoModel";

const markExpiredTodos = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      const now = new Date();
      const updatedTodos = await Todo.updateMany(
        { dueDate: { $lt: now }, completed: false },
        { $set: { completed: true } }
      );
      console.log(`${updatedTodos.modifiedCount} todos marked as completed`);
    } catch (error) {
      console.error("Failed to update expired todos:", error);
    }
  });
};

export default markExpiredTodos;
