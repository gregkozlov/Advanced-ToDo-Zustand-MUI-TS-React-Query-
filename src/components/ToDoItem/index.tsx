import { Card, CardContent, Typography, Chip, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "date-fns";
import { Box } from "@mui/material";

type Props = {
  title: string;
  description: string;
  status: string;
  createdAt: number;
};

const ToDoItem: React.FC<Props> = ({
  title,
  description,
  status,
  createdAt,
}) => {
  const formattedDate = format(new Date(createdAt), "MMM dd, yyyy - h:mm a");

  const handleItemEditClick = () => console.log("edit item");

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Box>
            <Chip label={status} color="primary" sx={{ marginRight: 1 }} />

            <IconButton aria-label="settings" onClick={handleItemEditClick}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Created: {formattedDate}
        </Typography>
        <Typography variant="body2">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ToDoItem;
