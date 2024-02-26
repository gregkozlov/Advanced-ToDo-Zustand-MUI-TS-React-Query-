import { styled } from "@mui/material/styles";

import { Typography, Paper } from "@mui/material";
import ToDoItem from "../ToDoItem";
import { TodoItem } from "../../store/types";

const TasksPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

type Props = {
  filteredTodos: TodoItem[];
};

const ToDoList: React.FC<Props> = ({ filteredTodos }) => {
  return (
    <>
      {filteredTodos.length ? (
        filteredTodos.map(todo => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            status={todo.status}
            createdAt={todo.createdAt}
          />
        ))
      ) : (
        <TasksPaper
          elevation={3}
          style={{ padding: "16px", textAlign: "center" }}
        >
          <Typography variant="subtitle1">You have nothing to do.</Typography>
          <Typography variant="subtitle1">Go get some sleep!</Typography>
        </TasksPaper>
      )}
    </>
  );
};

export default ToDoList;
