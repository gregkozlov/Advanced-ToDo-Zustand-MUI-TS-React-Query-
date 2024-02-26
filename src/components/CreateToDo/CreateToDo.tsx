import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, TextField, Paper } from "@mui/material";

import useTodoStore from "../../store";

const AddTaskPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const CreateToDo: React.FC = () => {
  const { addTodo, setBreadcrumb } = useTodoStore();

  const [addToDo, setAddToDo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setBreadcrumb("Home");
  }, [setBreadcrumb]);

  return (
    <>
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
    </>
  );
};

export default CreateToDo;
