import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Header></Header>
      <Person></Person>
    </div>
  );
}

export default App;
