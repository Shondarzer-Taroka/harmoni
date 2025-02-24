

import { Outlet } from 'react-router-dom';

import HomePage from './components/Homepage/HomePage';
import Navbar from './Header/NavBar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
