import './App.css';
import Welcome from './components/welcome/Welcome';

function App() {

  const name = "Sam"

  return (
    <div className="App">
      <Welcome name={name}/>
    </div>
  );
}

export default App;
