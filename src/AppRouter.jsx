import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default AppRouter;


