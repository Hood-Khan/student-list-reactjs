import React, { useState } from 'react';
import Card from './components/Card';
import students from './data';

function App() {
  const [list, setList] = useState(students);

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {list.length} Student List
      </h1>

      {/* Clear All Button */}
      <button
        onClick={() => setList([])}
        className="mb-8 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors"
      >
        Clear All
      </button>

      {/* Students Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {list.map((student, index) => (
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
