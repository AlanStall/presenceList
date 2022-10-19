import React, { useState } from 'react'
import { Card } from "../Components/Card/Card.jsx";

export function Home() {
  const [ studentName, setStudentName ] = useState("");
  const [ students , setStudents ] = useState([]);
 
  function createStudents(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };
    setStudents(prevStudent => ([...prevStudent, newStudent]));
  }

  return (
    <>
      <div className='bg-gray-200'>
        <h1 className='text-blue-200'>Lista de Presença</h1>
        <input 
          type="text" 
          placeholder="Digite o seu nome..." 
          className="input input-bordered"
          onChange={e => setStudentName(e.target.value)}
        />
        <button className='btn btn-primary ' onClick={createStudents}>Adicionar</button>
        {
          students.map(student => (
            <Card 
              key={student.time}
              name={student.name}
              time={student.time}
            />
          ))
        }
      </div>
    </>

    
  )
}

