import { Avatar, Grid, IconButton } from '@mui/material';
import MainLogo from '../MainLogo/MainLogo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchBar from './SearchBar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppSelector } from '@/app/store';
import { useAppDispatch } from '../../app/store';
import { changeMode } from '@/features/user/userSlice';
const Navigation = () => {
  const mode = useAppSelector((state) => state.user.mode);
  const dispatch = useAppDispatch();
  function handleToggleTheme() {
    dispatch(changeMode());
  }
  return (
    <Grid container alignItems="center" justifyContent={'space-between'} px={4} py={2}>
      <Grid item>
        <MainLogo />
      </Grid>
      <Grid item xs={3}>
        <SearchBar />
      </Grid>
      <Grid item display="flex" gap={'20px'} alignItems="center">
        <IconButton onClick={handleToggleTheme}>{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
        <FavoriteIcon />
        <NotificationsIcon />
        <SettingsIcon />
        <Avatar />
      </Grid>
    </Grid>
  );
};

export default Navigation;
