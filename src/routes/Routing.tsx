import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Navigation from '../components/Navigation/Navigation';

const Routing = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
