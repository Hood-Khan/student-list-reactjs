import React from 'react'
import Card from './components/Card'
import students from './data'

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gray-400 p-4">
      {
        students.map((student, index) => (
          <Card 
            key={index}
            image={student.image} 
            name={student.name} 
            description={student.description} 
          />
        ))
      }
    </div>
  )
}

export default App
