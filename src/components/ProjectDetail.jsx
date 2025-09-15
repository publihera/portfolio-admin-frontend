import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        // Usar a URL base do backend. Assumindo que o backend está na Render.
        // A URL exata do seu backend na Render precisaria ser configurada aqui.
        // Por enquanto, usarei um placeholder. No deploy final, isso será ajustado.
        const response = await fetch(`https://christian-a3qcab-backend.onrender.com/api/projects/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProject(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetail();
  }, [id]);

  if (loading) {
    return <div>Carregando detalhes do projeto...</div>;
  }

  if (error) {
    return <div>Erro ao carregar projeto: {error}</div>;
  }

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Imagens:</h2>
      <div>
        {project.images && project.images.map((image, index) => (
          <img
            key={index}
            src={`https://christian-a3qcab-backend.onrender.com/api/images/${image.filename}`}
            alt={image.alt_text}
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
          />
        ))}
      </div>
      <Link to="/">Voltar para a lista de projetos</Link>
    </div>
  );
}

export default ProjectDetail;


