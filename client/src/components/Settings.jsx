import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
  return (
    <div className="container mt-5 pt-4">
      <h1>Settings</h1>
      <div className="card shadow-lg mt-4">
        <div className="card-header bg-dark text-white">
          <h5>Account Settings</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter new username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter new email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter new password" />
            </div>
            <button type="submit" className="btn btn-warning">Save Changes</button>
          </form>
        </div>
      </div>

      <div className="card shadow-lg mt-4">
        <div className="card-header bg-dark text-white">
          <h5>Notification Settings</h5>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="emailNotifications" />
            <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="smsNotifications" />
            <label className="form-check-label" htmlFor="smsNotifications">SMS Notifications</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
