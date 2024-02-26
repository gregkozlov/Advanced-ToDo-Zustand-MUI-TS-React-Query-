import { Box, Typography, Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import useTodoStore from "../../store";
import { format } from "date-fns";
import { useEffect } from "react";

function History() {
  const location = useLocation();
  const { todos, setBreadcrumb } = useTodoStore();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const findToDo = todos.filter(item => item.id == Number(id));

  useEffect(() => {
    setBreadcrumb("History");
  }, [setBreadcrumb]);

  return (
    <Box>
      {findToDo[0].history.length
        ? findToDo[0].history.map(item => {
            return (
              <Card sx={{ padding: 3, mt: 2 }} key={item.changedAt}>
                <Typography>The task was marked as "{item.status}"</Typography>
                <Typography>
                  Edited at:
                  {format(new Date(item.changedAt), "MMM dd, yyyy - h:mm a")}
                </Typography>
              </Card>
            );
          })
        : "Seems like there is no edit history"}
    </Box>
  );
}

export default History;
