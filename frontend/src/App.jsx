import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

const PublicationsPage = lazy(() => import('./pages/PublicationsPage'));
const PatentsPage = lazy(() => import('./pages/PatentsPage'));
const ReasearchProjectsPage = lazy(() => import('./pages/ReasearchProjectsPage'));
const ConsultancyProjectsPage = lazy(() => import('./pages/ConsultancyProjectsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/patents" element={<PatentsPage />} />
          <Route path="/reasearch-projects" element={<ReasearchProjectsPage />} />
          <Route path="/consultancy-projects" element={<ConsultancyProjectsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
   
  );
}

export default App;
