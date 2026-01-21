import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage'
import MusicPage from '../Pages/MusicPage';

export default function AppRouter() {
  return (
    <Routes>
        <Route
        path='/'
        element={<HomePage/>}
        />
        <Route
        path='/about'
        element={<AboutPage/>}
        />
         <Route
        path='/music'
        element={<MusicPage/>}
        />
    </Routes>
  );
}
