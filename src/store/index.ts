import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum TodoState {
  ToDo = "ToDo",
  InProgress = "In Progress",
  Blocked = "Blocked",
  InQA = "InQA",
  Done = "Done",
  Deployed = "Deployed",
}

type TodoItem = {
  id: number;
  title: string;
  description: string;
  status: TodoState;
  createdAt: number;
};

type TodoStore = {
  todos: TodoItem[];
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: number) => void;
  updateTodoState: (
    id: number,
    title: string,
    description: string,
    status: TodoState,
  ) => void;
};

const useTodoStore = create(
  persist<TodoStore>(
    set => ({
      todos: [],
      addTodo: (title, description) =>
        set(state => ({
          todos: [
            ...state.todos,
            {
              id: Math.floor(Math.random() * 10000),
              title,
              description,
              status: TodoState.InProgress,
              createdAt: Date.now(),
            },
          ],
        })),
      removeTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
      updateTodoState: (id, title, description, status) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, title, description, status } : todo,
          ),
        })),
    }),
    {
      name: "todo-localStorage",
    },
  ),
);

export default useTodoStore;
