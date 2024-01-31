import { Card, CardContent, Typography, Chip, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "date-fns";
import { Box } from "@mui/material";
import React, { useState } from "react";
import OptionsModal from "../OptionsModal";

type Props = {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: number;
};

const ToDoItem: React.FC<Props> = ({
  id,
  title,
  description,
  status,
  createdAt,
}) => {
  const formattedDate = format(new Date(createdAt), "MMM dd, yyyy - h:mm a");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Box>
              <Chip label={status} color="primary" sx={{ marginRight: 1 }} />
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <OptionsModal
                id={id}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
              />
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
    </>
  );
};

export default ToDoItem;
