import { TextField } from "@mui/material";

type Props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <TextField
      fullWidth
      label="Search ToDo"
      margin="normal"
      value={filter}
      onChange={e => setFilter(e.target.value)}
    />
  );
};

export default Search;
