import { Grid } from '@mui/material';
import DateTime from './DateTime/DateTime';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <Grid container flexDirection={'column'} gap={3} px={6} py={3}>
      <Hero />
      <DateTime />
    </Grid>
  );
};

export default Home;
