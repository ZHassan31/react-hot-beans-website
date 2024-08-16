// src/Components/Profile.js
import React from 'react';
import Card from '../Components/Card';
import Employees from '../Employees';

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Meet the Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Employees.map((employee) => (
          <Card
            key={employee.id}
            img={`/images/${employee.Img}`} // Adjust based on where images are located
            name={employee.name}
            bio={employee.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
