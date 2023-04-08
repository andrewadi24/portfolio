import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
      <Route path = "/about" element = {<Home></Home>}></Route>
      <Route path = "/projects" element = {<Projects></Projects>}></Route>
      <Route path = "/contact" element = {<Home></Home>}></Route>
    </Routes>
    </>
  );
}

export default App;
