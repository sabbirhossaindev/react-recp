import './App.css';
import Header from './components/Countries/Header/Header';
import Countries from './components/Countries/Countries';
import Footer from './components/Countries/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
