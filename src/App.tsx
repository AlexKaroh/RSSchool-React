import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/404Page/404Page';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FormPage from './pages/FormPage/FormPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
