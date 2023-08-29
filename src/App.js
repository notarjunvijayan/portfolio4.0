import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { Loader } from './loader/Loader';

function App() {
  return (
    <div className="app">
      <Loader></Loader>
      <Navbar></Navbar>
    </div>
  )
}

export default App;
