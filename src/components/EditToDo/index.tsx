import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useTodoStore, { TodoState } from "../../store";
import { useState } from "react";

const listOfNextStatuses = (
  currentStatus: TodoState,
): Array<TodoState> | null => {
  const statusFlow: { [key in TodoState]: Array<TodoState> } = {
    [TodoState.ToDo]: [TodoState.InProgress],
    [TodoState.InProgress]: [TodoState.InQA, TodoState.Blocked],
    [TodoState.Blocked]: [TodoState.ToDo],
    [TodoState.InQA]: [TodoState.ToDo, TodoState.Done],
    [TodoState.Done]: [TodoState.Deployed],
    [TodoState.Deployed]: [],
  };

  return statusFlow[currentStatus] || null;
};

function EditToDo() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { todos, updateTodoState } = useTodoStore();
  const task = todos.filter(item => item.id == Number(id));

  const [status, setStatus] = useState(task[0].status);
  const [title, setTitle] = useState(task[0].title);
  const [description, setDescription] = useState(task[0].description);

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" component="h3">
          Edit Task
        </Typography>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
          label="Title of the task"
          margin="normal"
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
          label="Description of task goes here."
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            value={status}
            labelId="status-label"
            id="status-select"
            label="status"
            onChange={e => setStatus(e.target.value as TodoState)}
          >
            <MenuItem value={task[0].status}>{task[0].status}</MenuItem>

            {listOfNextStatuses(TodoState.InProgress)?.map(status => {
              return (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Button onClick={() => navigate("/")} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => {
              updateTodoState(Number(id), title, description, status);
              navigate("/");
            }}
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default EditToDo;
