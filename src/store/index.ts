import { create } from "zustand";
import { persist } from "zustand/middleware";

type TodoState =
  | "ToDo"
  | "In Progress"
  | "Blocked"
  | "InQA"
  | "Done"
  | "Deployed";

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
  updateTodoState: (id: number, newState: TodoState) => void;
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
              status: "In Progress",
              createdAt: Date.now(),
            },
          ],
        })),
      removeTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
      updateTodoState: (id, newState) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, state: newState } : todo,
          ),
        })),
    }),
    {
      name: "todo-storage",
    },
  ),
);

export default useTodoStore;
