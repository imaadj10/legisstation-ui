import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Map } from './components/map/Map';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/states/:id" element={<></>} />
    </Routes>
  </>
);

export default App;
