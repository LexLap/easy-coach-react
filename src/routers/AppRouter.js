import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import MatchStatsContextProvider from '../context/MatchStatsContext';


import LoadingModal from '../components/LoadingModal';

const Task1 = React.lazy(() => {
    return new Promise(resolve => {
        resolve(import('../components/Task1/Task1'));
    })
})
const Task2 = React.lazy(() => {
    return new Promise(resolve => {
        resolve(import('../components/Task2/Task2'));
    })
})

const AppRouter = () => (
    <BrowserRouter>
        <MatchStatsContextProvider>
            <Suspense fallback={<LoadingModal />}>
                <Routes>
                    <Route path="*" element={<Navigate replace to="/task1" />} />
                    <Route exact path='/task1' element={<Task1 />} />
                    <Route exact path='/task2' element={<Task2 />} />
                </Routes>
            </Suspense>
        </MatchStatsContextProvider>
    </BrowserRouter>
)

export default AppRouter;