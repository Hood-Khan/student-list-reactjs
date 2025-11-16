import React from 'react';
import Card from './components/Card';
import students from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-start py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <Card
            key={index}
            image={student.image}
            name={student.name}
            description={student.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
