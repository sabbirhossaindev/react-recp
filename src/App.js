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

// function LoadCountries() {
//   const [countries, setCounties] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCounties(data))
//   }, []);
//   return (
//     <div>
//       <h2>counties tour yey...</h2>
//       {/* <h3>Countries: { counties.length}</h3> */}
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: { props.name}</h2>
//     </div>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const increaseCounter = () => (setCount(count + 1));
//   const decreaseCounter = () => (setCount(count -1));
//   return (
//     <div className='counter'>
//       <h2>Count { count}</h2>
//       <div className='btn-count'>
//         <button className='btn' onClick={increaseCounter}>Increase</button>
//         <button className='btn' onClick={decreaseCounter}>Decrease</button>
//       </div>
//     </div>
//   )
// }

export default App;
