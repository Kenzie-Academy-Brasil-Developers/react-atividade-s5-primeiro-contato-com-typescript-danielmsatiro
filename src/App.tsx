import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [users, setUsers] = useState<User[]>([] as User[]);

  const handleSubmit = () => {
    const user = { name, age, hobby };
    if (!!name || !!age || !!hobby) {
      setUsers([...users, user]);
    }
    setName("");
    setAge(0);
    setHobby("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Nome"
          value={name}
          label="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Idade"
          label="Idade"
          type="number"
          value={!age ? "undefined" : age}
          min={0}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="Hobby"
          value={hobby}
          label="Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Enviar</button>
        <ul>
          {users.map((person) => (
            <Card name={person.name} age={person.age} hobby={person.hobby} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
