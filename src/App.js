
import './App.css';
import MovieSection from './MovieSection';
import Moviecard from './Moviecard';
import NavbarSection from './NavbarSection';

function App() {
  console.log('hi');
  return (
    <div className="App">
      <NavbarSection/>
      {/* <Moviecard/> */}
      <MovieSection/>
    </div>
  )
}

export default App;


