import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Task1 from '../components/Task1/Task1';
import Task2 from '../components/Task2/Task2';
import MatchStatsContextProvider from '../context/MatchStatsContext';


const AppRouter = () => (
    <BrowserRouter>
        <MatchStatsContextProvider>
            <Routes>
                <Route path="*" element={<Navigate replace to="/task1" />} />
                <Route exact path='/task1' element={<Task1 />} />
                <Route exact path='/task2' element={<Task2 />} />
            </Routes>
        </MatchStatsContextProvider>
    </BrowserRouter>
)

export default AppRouter;