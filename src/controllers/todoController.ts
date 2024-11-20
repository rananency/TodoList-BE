import { Request, Response } from "express";
import Todo from "../models/toDoModel";

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, dueDate } = req.body;
  const userId = (req as any).userId;

  try {
    const todo = new Todo({ title, description, dueDate, user: userId });
    await todo.save();
    res.status(201).json({
        message:"to do created successfully",
        data:todo
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to create todo", details: error });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  try {
    const todos = await Todo.find({ user: userId });
    res.json({data:todos});
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos", details: error });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).userId;

  try {
    const todo = await Todo.findOne({ _id: id, user: userId });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todo", details: error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).userId;
  const updates = req.body;

  try {
    const todo = await Todo.findOneAndUpdate({ _id: id, user: userId }, updates, { new: true });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: "Failed to update todo", details: error });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).userId;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo", details: error });
  }
};
