import { MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import useTodoStore from "../../store";

type Props = {
  id: number;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

const OptionsModal: React.FC<Props> = ({ id, anchorEl, setAnchorEl }) => {
  const { removeTodo } = useTodoStore();

  const open = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
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
        }}
      >
        Task History
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
        }}
      >
        Edit Task
      </MenuItem>
      <MenuItem onClick={() => removeTodo(id)}>Delete Task</MenuItem>
    </Menu>
  );
};

export default OptionsModal;
