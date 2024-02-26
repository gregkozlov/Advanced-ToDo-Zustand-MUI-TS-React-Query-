export enum TodoState {
  ToDo = "ToDo",
  InProgress = "In Progress",
  Blocked = "Blocked",
  InQA = "InQA",
  Done = "Done",
  Deployed = "Deployed",
}

export type TodoHistoryRecord = {
  status: TodoState;
  changedAt: number;
};

export type TodoItem = {
  id: number;
  title: string;
  description: string;
  status: TodoState;
  createdAt: number;
  history: TodoHistoryRecord[];
};

type Breadcrumb = "Home" | "Edit" | "History";

export type TodoStore = {
  todos: TodoItem[];
  breadcrumb: Breadcrumb;
  addTodo: (title: string, description: string) => void;
  removeTodo: (id: number) => void;
  updateTodoState: (
    id: number,
    title: string,
    description: string,
    status: TodoState,
  ) => void;
  addTodoHistoryRecord: (id: number, status: TodoState) => void;
  setBreadcrumb: (name: Breadcrumb) => void;
};
