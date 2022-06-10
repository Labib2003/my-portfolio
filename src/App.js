import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import ProjectDetail from './components/pages/ProjectDetail/ProjectDetail';
import Footer from './components/sharedPages/Footer';
import NavBar from './components/sharedPages/NavBar';

function App() {
  return (
    <div>
      <div className="max-w-7xl p-10 mx-auto">
        <div className='sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects/:index' element={<ProjectDetail></ProjectDetail>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
