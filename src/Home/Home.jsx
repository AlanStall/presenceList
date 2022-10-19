import React, { useState } from 'react'
import { Card } from "../Components/Card.jsx";

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
      <div className='hero min-h-screen bg-base-200 hero-content flex-col lg:flex-row'>
        
        <h1 className='text-white'>Olá olá</h1>
        <input 
          type="text" 
          placeholder="Digite o seu nome..." 
          className="input input-bordered"
          onChange={e => setStudentName(e.target.value)}
        />        
        <button className='btn btn-secundary ' onClick={createStudents}>Adicionar</button>
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

