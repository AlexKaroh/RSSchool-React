import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/404Page/404Page';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Header from './components/Header/Header';
class App extends React.Component<object, object> {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
