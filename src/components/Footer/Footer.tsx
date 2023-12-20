import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import MainLogo from '../MainLogo/MainLogo';

interface FooterProps {
  // Define your prop types here
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Grid container flexDirection="column" position={'relative'} left={0} bottom={0} px={5} py={3} gap={2}>
      <Grid item display="flex" width={'100%'}>
        <Grid item xs={6} display="flex" flexDirection="column" gap={2}>
          <MainLogo />
          <Typography variant="caption">
            Our vision is to provide convenience and help increase your sales business.
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            &copy; {new Date().getFullYear()} MORENT. All rights reserved.
          </Typography>
        </Grid>
        <Grid item display="flex" xs={6} gap={5} justifyContent="space-between">
          <Grid item gap={3} display="flex" flexDirection="column">
            <Typography variant="body1" fontFamily="bold">
              About
            </Typography>
            <Typography variant="caption">How it works</Typography>
            <Typography variant="caption">Featured</Typography>
            <Typography variant="caption">Partnership</Typography>
          </Grid>
          <Grid item gap={3} display="flex" flexDirection="column">
            <Typography variant="body1" fontFamily="bold">
              Community
            </Typography>
            <Typography variant="caption">Events</Typography>
            <Typography variant="caption">Blog</Typography>
            <Typography variant="caption">Podcast</Typography>
          </Grid>
          <Grid item gap={3} display="flex" flexDirection="column">
            <Typography variant="body1" fontFamily="bold">
              Social
            </Typography>
            <Typography variant="caption">Discord</Typography>
            <Typography variant="caption">Instagram</Typography>
            <Typography variant="caption">Twitter</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(Footer);
