import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import React from 'react';

import Home from './Pages/Home';
import Result from './Pages/Result';
import Service from './Pages/Service';
import Layout from './Layout';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop component

const App = () => {
  return (
    <Router>
      <ScrollToTop />  {/* Add ScrollToTop to ensure scrolling happens on route change */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
