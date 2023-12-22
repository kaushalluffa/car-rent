import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Navigation from '../components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { Divider, Grid } from '@mui/material';
import Payment from '@/pages/Payment/Payment';

const Routing = () => {
  return (
    <Grid position={'relative'} minHeight="100vh">
      <Navigation />
      <Divider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Payment />} />
      </Routes>
      <Divider />
      <Footer />
    </Grid>
  );
};

export default Routing;
