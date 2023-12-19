import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Navigation from '../components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { Grid } from '@mui/material';

const Routing = () => {
  return (
    <Grid position={'relative'} minHeight="100vh">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Grid>
  );
};

export default Routing;
