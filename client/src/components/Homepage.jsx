import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container py-5">
      <div className="card bg-dark text-white mb-4">
        <div className="card-body">
          <h1 className="display-4">Welcome to <span className="text-warning">Valkyrie Vault</span></h1>
          <p className="lead fst-italic">"Leadership is the capacity to translate vision into reality."</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card border-warning h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Active Projects</h5>
              <h2 className="display-6 text-warning">12</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-warning h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Team Members</h5>
              <h2 className="display-6 text-warning">24</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-warning h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Completion Rate</h5>
              <h2 className="display-6 text-warning">92%</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title mb-0">Recent Projects</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                {[
                  { name: "Website Redesign", time: "2 hours ago" },
                  { name: "Mobile App Development", time: "5 hours ago" },
                  { name: "Database Migration", time: "1 day ago" }
                ].map((project, i) => (
                  <div key={i} className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="bg-warning rounded me-3 d-flex align-items-center justify-content-center" 
                           style={{width: '64px', height: '64px'}}>
                        <span className="h4 mb-0 text-dark">P{i + 1}</span>
                      </div>
                      <div>
                        <h6 className="mb-0">{project.name}</h6>
                        <small className="text-muted">Last updated: {project.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title mb-0">Team Activity</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                {[
                  { name: "John Doe", action: "completed Project Setup task" },
                  { name: "Jane Smith", action: "updated Database Schema" },
                  { name: "Mike Johnson", action: "added new feature" }
                ].map((activity, i) => (
                  <div key={i} className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary rounded-circle me-3 d-flex align-items-center justify-content-center text-white"
                           style={{width: '40px', height: '40px'}}>
                        {activity.name.charAt(0)}
                      </div>
                      <div>
                        <p className="mb-0">{activity.name} {activity.action}</p>
                        <small className="text-muted">30 minutes ago</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;