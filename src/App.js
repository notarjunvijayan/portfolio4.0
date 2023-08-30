import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { Loader } from './loader/Loader';
import { Intro } from './introsection/Intro';

function App() {
  return (
    <div className="app">
      <Loader></Loader>
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  )
}

export default App;
