import './App.css';
import { Navbar } from './navbar/Navbar';
import { Loader } from './loader/Loader';
import { Intro } from './introsection/Intro';
import { About } from './About/About';

function App() {
  return (
    <div className="app">
      <Loader></Loader>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
    </div>
  )
}

export default App;
