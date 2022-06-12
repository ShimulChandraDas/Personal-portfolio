import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Footer from './Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './Pages/Home/ProjectDetails';
import About from './Pages/Home/About';
import Project from './Pages/Home/Project';
import MySkills from './Pages/Home/MySkills';
import WorkDetails from './Pages/Home/WorkDetails';
import ContactMe from './Pages/Home/ContactMe';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<MySkills />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/service' element={<WorkDetails />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<ContactMe />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
