import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website",
      progress: 75,
      team: ["John D.", "Mike R.", "Lisa K."],
      deadline: "2025-03-15"
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Developing a new mobile app for the company",
      progress: 50,
      team: ["Anna M.", "David B.", "James T."],
      deadline: "2025-05-10"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Projects</h1>
        <button className="btn btn-warning">
          <i className="bi bi-plus-lg me-2"></i>New Project
        </button>
      </div>

      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                {/* Project Title */}
                <h5 className="card-title" style={{ fontSize: '1.5rem' }}>{project.name}</h5>
                {/* Project Description */}
                <p className="card-text" style={{ fontSize: '1.1rem' }}>{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-3">
                  <label className="form-label">Progress</label>
                  <div className="progress">
                    <div 
                      className="progress-bar bg-warning" 
                      role="progressbar" 
                      style={{ width: `${project.progress}%` }}
                      aria-valuenow={project.progress} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      {project.progress}%
                    </div>
                  </div>
                </div>

                {/* Team Avatars and Deadline */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="avatar-group">
                    {/* Render Avatars for Team Members */}
                    {project.team.map((member, i) => (
                      <span 
                        key={i} 
                        className="avatar bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-1" 
                        style={{ width: '32px', height: '32px' }}
                      >
                        {member[0]} {/* Take the first letter of the team member name */}
                      </span>
                    ))}
                  </div>
                  {/* Project Deadline */}
                  <small className="text-muted">Due: {project.deadline}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
