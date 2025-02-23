import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "15+ years of project management expertise"
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      description: "Full-stack developer with 8 years experience"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      description: "Passionate about creating intuitive user experiences"
    }
  ];

  const features = [
    {
      title: "Project Management",
      description: "Streamline your workflow with our intuitive project management tools",
      icon: "📊"
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration features",
      icon: "👥"
    },
    {
      title: "Task Tracking",
      description: "Keep track of progress with advanced task management",
      icon: "✓"
    },
    {
      title: "Resource Planning",
      description: "Optimize resource allocation for maximum efficiency",
      icon: "📈"
    }
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="card bg-dark text-white mb-5">
        <div className="card-body text-center py-5">
          <h1 className="display-4">About <span className="text-warning">Valkyrie Vault</span></h1>
          <p className="lead w-75 mx-auto">
            Empowering teams to achieve excellence through innovative project management solutions.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-warning">
            <div className="card-body text-center py-4">
              <h2 className="card-title mb-4">Our Mission</h2>
              <p className="card-text lead">
                At Valkyrie Vault, we're dedicated to transforming project management through 
                cutting-edge technology and intuitive design. Our platform empowers teams to 
                collaborate effectively, manage resources efficiently, and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="text-center mb-4">What We Offer</h2>
      <div className="row mb-5">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="display-4 mb-3">{feature.icon}</div>
                <h3 className="h5 card-title">{feature.title}</h3>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <h2 className="text-center mb-4">Our Leadership Team</h2>
      <div className="row mb-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="bg-warning rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
                     style={{width: '100px', height: '100px'}}>
                  <span className="h1 mb-0 text-dark">{member.name.charAt(0)}</span>
                </div>
                <h3 className="h5 card-title">{member.name}</h3>
                <p className="card-subtitle mb-2 text-muted">{member.role}</p>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="row">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <div className="card-body py-4">
              <div className="row text-center">
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-warning display-4">500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-warning display-4">50k</h3>
                  <p>Users Worldwide</p>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <h3 className="text-warning display-4">98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="col-md-3">
                  <h3 className="text-warning display-4">24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;