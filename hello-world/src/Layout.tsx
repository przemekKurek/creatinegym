import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Layout';
import { Dashboard } from '@material-ui/icons';

const App = (): JSX.Element => (
 
    <Routes>
      <Route
        path='/'
        element={
            <MainPage />
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
);

export default App;