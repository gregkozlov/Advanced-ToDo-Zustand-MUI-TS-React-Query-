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

const AddTaskPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const TasksPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 200,
}));

const Home: React.FC = () => {
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
          <TextField fullWidth label="Title" margin="normal" />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Box>
        </Box>
      </AddTaskPaper>

      <TasksPaper elevation={3}>
        <Typography variant="subtitle1">You have nothing to do.</Typography>
        <Typography variant="subtitle1">Go get some sleep!</Typography>
      </TasksPaper>
    </Container>
  );
};

export default Home;
