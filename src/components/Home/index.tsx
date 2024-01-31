import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  Container,
  Breadcrumbs,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import ToDoList from "../TodoList";
import useTodoStore from "../../store";

const AddTaskPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const Home: React.FC = () => {
  const { addTodo } = useTodoStore();

  const [addToDo, setAddToDo] = useState({
    title: "",
    description: "",
  });
  console.log("🚀 ~ addToDo:", addToDo);

  return (
    <Container maxWidth="sm">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ padding: "20px 0" }}
      >
        <Typography color="textPrimary">Task Management</Typography>
        <Link href="/" sx={{ textDecoration: "none" }}>
          Home
        </Link>
      </Breadcrumbs>

      <AddTaskPaper elevation={3}>
        <Typography variant="h6" gutterBottom>
          Add a new Task
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Title"
            margin="normal"
            value={addToDo.title}
            onChange={e => setAddToDo({ ...addToDo, title: e.target.value })}
          />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            value={addToDo.description}
            onChange={e =>
              setAddToDo({ ...addToDo, description: e.target.value })
            }
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addTodo(addToDo.title, addToDo.description);
                setAddToDo({
                  title: "",
                  description: "",
                });
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </AddTaskPaper>

      <ToDoList />
    </Container>
  );
};

export default Home;
