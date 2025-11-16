import React from 'react'
import Card from './components/Card'
import students from './data'

function App() {
  return (
    <div>
      {
        students.map((student)=>(
          <Card image={student.image} name={student.name} description={student.description} />
        ))
      }
      
    </div>
  )
}

export default App
