import { MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTodoStore from "../../store";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";

type Props = {
  id: number;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

const OptionsModal: React.FC<Props> = ({ id, anchorEl, setAnchorEl }) => {
  const { removeTodo } = useTodoStore();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        open={open}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/history?id=${id}`);
          }}
        >
          Edit History
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/edit?id=${id}`);
          }}
        >
          Edit Task
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setIsConfirmModalOpen(true);
          }}
        >
          Delete Task
        </MenuItem>
      </Menu>

      <ConfirmModal
        isOpened={isConfirmModalOpen}
        onConfirm={() => removeTodo(id)}
        onCancel={() => setIsConfirmModalOpen(false)}
      />
    </>
  );
};

export default OptionsModal;
