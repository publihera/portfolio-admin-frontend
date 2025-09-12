import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<ProjectList />} />
        <Route path="/portfolio/projects/:id" element={<ProjectDetail />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default AppRouter;


