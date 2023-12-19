import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{ startAdornment: <Search />, endAdornment: <TuneIcon /> }}
      fullWidth
    />
  );
};

export default SearchBar;
