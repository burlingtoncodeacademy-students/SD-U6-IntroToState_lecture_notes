import { useState } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';

function App() {

  const [ names, setNames ] = useState([
    'Frodo', 'Sam', 'Pippin', 'Merry'
  ]);

  const displayWelcome = () => {
    return(names.map((name, index) => {
      return(
        <Welcome 
          key={index}
          name={name}
          names={names} // obtaining our full array in the current state
          setName={setNames} // passing our function so that we may change the state
        />
      )
    }))
  }

  return (
    <div className="App">
      {displayWelcome()}
    </div>
  );
}

export default App;
