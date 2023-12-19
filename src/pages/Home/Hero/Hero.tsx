import { Button, Grid, Typography, useTheme } from '@mui/material';
import { memo } from 'react';
import Car from '../../../assets/car.png';
interface HeroProps {
  // Define your prop types here
}

const Hero: React.FC<HeroProps> = () => {
  const theme = useTheme();
  return (
    <Grid container alignItems="center" justifyContent={'space-between'}>
      <Grid
        item
        display={'flex'}
        flexDirection="column"
        xs={5.9}
        gap={2}
        p={3}
        sx={{ bgcolor: theme.cr.info[500] }}
        color="white"
        borderRadius="10px"
        minHeight={'344px'}
      >
        <Typography variant="body1" fontWeight={600}>
          The Best Platform <br /> for Car Rental
        </Typography>
        <Typography variant="body1">
          Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
        </Typography>
        <Grid item>
          <Button sx={{ bgcolor: theme.cr.primary[500] }} variant="contained">
            Rental Car
          </Button>
        </Grid>
        <Grid item width={'280px'} height="116px">
          <img src={Car} alt="hero img" width={'100%'} />
        </Grid>
      </Grid>
      <Grid
        item
        display={'flex'}
        flexDirection="column"
        xs={5.9}
        gap={2}
        p={3}
        sx={{ bgcolor: theme.cr.primary[500] }}
        color="white"
        borderRadius="10px"
        minHeight={'344px'}
      >
        <Typography variant="body1" fontWeight={600}>
          The Best Platform <br /> for Car Rental
        </Typography>
        <Typography variant="body1">
          Ease of doing a car rental safely and <br /> reliably. Of course at a low price.
        </Typography>
        <Grid item>
          <Button sx={{ bgcolor: theme.cr.info[500] }} variant="contained">
            Rental Car
          </Button>
          <Grid item width={'280px'} height="116px">
            <img src={Car} alt="hero img" width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(Hero);
