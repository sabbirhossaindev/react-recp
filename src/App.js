import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Countries/Footer/Footer';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Header></Header>
      <Person></Person>
      <Footer></Footer>
    </div>
  );
}

export default App;
