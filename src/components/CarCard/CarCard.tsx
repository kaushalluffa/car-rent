import { FavoriteBorder } from '@mui/icons-material';
import { Grid, IconButton, Typography, Paper, Button, useTheme } from '@mui/material';
import { memo } from 'react';
import Car from '../../assets/car.png';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
interface CarCardProps {
  // Define your prop types here
}

const CarCard: React.FC<CarCardProps> = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      width="290px"
      height="280px"
      flexDirection={'column'}
      justifyContent="space-between"
      component={Paper}
      variant="outlined"
      p={2}
    >
      <Grid item display="flex" alignItems="center" justifyContent={'space-between'}>
        <Grid item display="flex" flexDirection="column" gap={0.5}>
          <Typography variant="body1" fontWeight={600}>
            Koenigsegg
          </Typography>
          <Typography variant="caption">Sport</Typography>
        </Grid>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
      </Grid>
      <Grid item display={'flex'} flexDirection="column">
        <Grid item width="200px" height="100px">
          <img src={Car} alt="product img" width="100%" />
        </Grid>
        <Grid item display="flex" alignItems="center" justifyContent={'space-between'}>
          <Grid item display="flex" alignItems="center" gap={0.5}>
            <LocalGasStationIcon />
            <Typography variant="caption">70L</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={0.5}>
            <SettingsSuggestIcon />
            <Typography variant="caption">Manual</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={0.5}>
            <PeopleAltIcon />
            <Typography variant="caption">2 People</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item display="flex" alignItems="center" justifyContent={'space-between'}>
        <Typography variant="body1">$99.0/day</Typography>
        <Button variant="contained" sx={{ bgcolor: theme.cr.primary[500] }}>
          Rent Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(CarCard);
