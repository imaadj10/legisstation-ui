import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Map } from './components/map/Map';
import { State } from './components/state/State';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/states/:id" element={<State />} />
    </Routes>
  </>
);

export default App;
