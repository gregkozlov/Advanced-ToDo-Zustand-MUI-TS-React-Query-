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

function EditToDo() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" component="h3">
          Edit Task
        </Typography>
        <TextField fullWidth label="Title of the task" margin="normal" />
        <TextField
          fullWidth
          label="Description of task goes here."
          margin="normal"
          multiline
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            label="status"
            // onCha={handleChange}
          >
            <MenuItem value={"todo"}>Todo</MenuItem>
            <MenuItem value={"in-progress"}>In Progress</MenuItem>
            <MenuItem value={"done"}>Done</MenuItem>
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
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default EditToDo;
