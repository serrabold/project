import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

const Taskspage = () => {
  const tasks = [
    { id: 1, title: "Design Mockups", status: "In Progress", dueDate: "2025-03-01" },
    { id: 2, title: "Code Landing Page", status: "Completed", dueDate: "2025-02-20" },
    { id: 3, title: "Setup Database", status: "Not Started", dueDate: "2025-03-10" }
  ];

  return (
    <div className="container mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Tasks</h1>
        <button className="btn btn-warning">
          <i className="bi bi-plus-lg me-2"></i>New Task
        </button>
      </div>

      <div className="row">
        {tasks.map(task => (
          <div key={task.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">Due Date: {task.dueDate}</p>
                <p className="card-text"><small className="text-muted">Status: {task.status}</small></p>
                <button className="btn btn-warning">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskspage;
