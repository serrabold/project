import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported

const Calendar = () => {
  const events = [
    { id: 1, title: "Project Review", date: "2025-02-24", time: "10:00 AM" },
    { id: 2, title: "Team Meeting", date: "2025-02-24", time: "2:00 PM" },
    { id: 3, title: "Client Presentation", date: "2025-02-25", time: "11:00 AM" }
  ];

  // Generate calendar dates dynamically for February 2025
  const generateCalendarDays = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const daysArray = [];
    
    // Get the starting day of the month
    const startDay = firstDay.getDay(); // 0 for Sunday, 6 for Saturday

    // Add empty divs for the first week padding
    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }

    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  // Generate the calendar for February 2025 (month 1, year 2025)
  const days = generateCalendarDays(1, 2025);

  return (
    <div className="container mt-5 pt-4">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3 className="card-title mb-0">Calendar</h3>
        </div>
        <div className="card-body">
          {/* Calendar Header (Days of the Week) */}
          <div className="row mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="col text-center">
                <div className="p-2 bg-light rounded">
                  <strong>{day}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Body (Days of the Month) */}
          <div className="row">
            {days.map((day, index) => (
              <div key={index} className="col text-center">
                <div
                  className={`p-2 rounded ${day ? 'bg-light' : ''}`}
                  style={{ minHeight: '60px' }}
                >
                  {day ? <strong>{day}</strong> : <div className="p-2"></div>}
                </div>
                {/* Display events under the specific day */}
                {events.filter(event => parseInt(event.date.split('-')[2]) === day).map((event) => (
                  <div key={event.id} className="mt-2">
                    <small className="text-muted">{event.title} - {event.time}</small>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h4 className="mt-4">Upcoming Events</h4>
          <div className="list-group">
            {events.map(event => (
              <div key={event.id} className="list-group-item list-group-item-action">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">{event.title}</h6>
                    <small className="text-muted">{event.date} at {event.time}</small>
                  </div>
                  <span className="badge bg-warning text-dark">Upcoming</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
