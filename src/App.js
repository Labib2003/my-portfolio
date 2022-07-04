import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import ProjectDetail from './components/pages/ProjectDetail/ProjectDetail';
import Footer from './components/sharedPages/Footer';
import NavBar from './components/sharedPages/NavBar';

function App() {
  const navbarItems = <>
    <li className="mb-5">
      <a href='/#services'>Services</a>
    </li>
    <li className="mb-5">
      <a href='/#portfolio'>Projects</a>
    </li>
    <li className="mb-5">
      <a
        href='https://drive.google.com/file/d/1HjygocBdppINjJQ9laEe88QnDGac4Jz8/view?usp=sharing'
        target='_blank'
        rel="noreferrer"
        className="btn btn-primary text-left"
      >Download Resume</a>
    </li>
  </>
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className='max-w-7xl sticky top-0 z-50 w-full mx-auto'>
          <NavBar></NavBar>
        </div>
        <div className="max-w-7xl p-10 mx-auto">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/projects/:index' element={<ProjectDetail></ProjectDetail>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {navbarItems}
        </ul>
      </div>
    </div >
  );
}

export default App;
