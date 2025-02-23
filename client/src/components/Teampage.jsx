import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Teampage = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Project Manager", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Mike Ross", role: "Developer", avatar: "https://via.placeholder.com/50" },
    { id: 3, name: "Lisa Kean", role: "Designer", avatar: "https://via.placeholder.com/50" }
  ];

  return (
    <div className="container mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Team Members</h1>
        <button className="btn btn-warning">
          <i className="bi bi-plus-lg me-2"></i>New Member
        </button>
      </div>

      <div className="row">
        {teamMembers.map(member => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <img src={member.avatar} alt={member.name} className="rounded-circle mb-3" style={{ width: '50px', height: '50px' }} />
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <button className="btn btn-warning">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teampage;
