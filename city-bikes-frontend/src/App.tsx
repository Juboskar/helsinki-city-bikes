import React from 'react';
import { Button } from '@mui/material';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyListPage from './pages/JourneyListPage';
import JourneyPage from './pages/JourneyPage';
import StationListPage from './pages/StationListPage';
import StationPage from './pages/StationPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/journeys">
            Journeys
          </Button>
          <Button component={Link} to="/stations">
            Stations
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journeys" element={<JourneyListPage />} />
          <Route path="/journeys/:id" element={<JourneyPage />} />
          <Route path="/stations" element={<StationListPage />} />
          <Route path="/stations/:id" element={<StationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
