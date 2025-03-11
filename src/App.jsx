import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   )
// }

function App() {
  const animals = ['lion', 'tiger', 'lamb', 'cow'];

  return (
    <div>
     <Person />
    </div>
  )
}

function Input({ value, name, onChange }) {
  return (
    <input
      type="text"
      value={value}
      name={name}
      onChange={onChange} 
    />
  )
}

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smythe", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPerson(prevPerson => ({
      ...prevPerson, [name]: value
    }))
  }

  return (
    <>
      <h1>{person.firstName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input name="firstName" value={person.firstName} onChange={handleInputChange}/>
      <Input name="lastName" value={person.lastName} onChange={handleInputChange}/>
    </>
  );
}

export default App
