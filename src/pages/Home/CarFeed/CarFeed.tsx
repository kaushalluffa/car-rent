import CarCard from '@/components/CarCard/CarCard';
import { Button, Grid, useTheme } from '@mui/material';
import { memo } from 'react';

interface CarFeedProps {
  // Define your prop types here
}

const CarFeed: React.FC<CarFeedProps> = () => {
  const theme = useTheme();
  return (
    <Grid container flexDirection="column" alignItems={'center'} gap={2}>
      <Grid container flexWrap={'wrap'} gap={1}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Grid>
      <Grid item>
        <Button sx={{ bgcolor: theme.cr.primary[500] }} variant="contained">
          Show More Cars
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(CarFeed);
