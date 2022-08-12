import React from 'react';
import { Button } from '@mui/material';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import HomePage from './pages/homePage';
import JourneyListPage from './pages/journeyListPage';

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
          <Button component={Link} to="/">
            Stations
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journeys" element={<JourneyListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
