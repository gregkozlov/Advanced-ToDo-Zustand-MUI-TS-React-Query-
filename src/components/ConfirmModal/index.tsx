import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {
  isOpened: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<Props> = ({ isOpened, onCancel, onConfirm }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 250,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Confirm your action
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button variant="outlined" color="primary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={() => onConfirm()}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmModal;
