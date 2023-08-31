import './App.css';
import { Navbar } from './navbar/Navbar';
import { Loader } from './loader/Loader';
import { Intro } from './introsection/Intro';
import { About } from './About/About';
import { Contact } from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <Loader></Loader>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Contact></Contact>
    </div>
  )
}

export default App;
