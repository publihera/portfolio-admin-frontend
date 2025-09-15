import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Usar a URL base do backend. Assumindo que o backend está na Render.
        // A URL exata do seu backend na Render precisaria ser configurada aqui.
        // Por enquanto, usarei um placeholder. No deploy final, isso será ajustado.
        const response = await fetch('https://portfolio-admin-backend-lrib.onrender.com/api/projects');       if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Carregando projetos...</div>;
  }

  if (error) {
    return <div>Erro ao carregar projetos: {error}</div>;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>Ver Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;


