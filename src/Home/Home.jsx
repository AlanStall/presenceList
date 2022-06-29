import React, { useState } from 'react'
import './Home.css'
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
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder="Digite o seu nome..." 
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={createStudents}>Adicionar</button>

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
  )
}

