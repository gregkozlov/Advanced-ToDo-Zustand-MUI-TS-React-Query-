import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TodoState, TodoStore } from "./types";

const useTodoStore = create(
  persist<TodoStore>(
    set => ({
      todos: [],
      breadcrumb: "Home",
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
              history: [],
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

      addTodoHistoryRecord: (id, status) =>
        set(state => ({
          todos: state.todos.map(todo => {
            if (todo.id === id) {
              const newRecord = { status, changedAt: Date.now() };

              return {
                ...todo,
                status,
                history: [...todo.history, newRecord],
              };
            } else {
              return todo;
            }
          }),
        })),

      setBreadcrumb: name => set(state => ({ ...state, breadcrumb: name })),
    }),
    {
      name: "todo-localStorage",
    },
  ),
);

export default useTodoStore;
