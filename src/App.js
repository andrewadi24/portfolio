import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './Components/ContactPage';
import ProjectPage from './Components/ProjectPage';
import AboutPage from './Components/AboutPage';
function App() {
  return (
    <div className="">

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/portfolio' element={<Home></Home>}></Route>
          <Route path ="/contact" element = {<ContactPage></ContactPage>}></Route>
          <Route path = "/project" element = {<ProjectPage></ProjectPage>}></Route>
          <Route path = "/about" element = {<AboutPage></AboutPage>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div >
  );
}
export default App;
