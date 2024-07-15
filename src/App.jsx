// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './shared/components/Layouts/RootLayout';
import Homepage from './pages/Home';
import Bookpage from './pages/Book';
import Dentistpage from './pages/Dentist';
import Servicepage from './pages/Services';
import BasicDentalServices from './pages/BasicDentalServices';
import SpecializedServices from './pages/SpecializedServices';
import NotFoundpage from './pages/NotFound';
import ScrollToTop from '../ScrollToTop'; // Make sure you import the ScrollToTop component

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<Bookpage />} />
          <Route path="/aboutus" element={<Dentistpage />} />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/services/basic-dental-services" element={<BasicDentalServices />} />
          <Route path="/services/specialized-services" element={<SpecializedServices />} />
        </Route>
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </>
  );
};

export default App;
