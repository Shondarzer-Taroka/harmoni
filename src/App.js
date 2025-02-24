
import Navbar from './components/Homepage/NavBar';
import { Outlet } from 'react-router-dom';

import HomePage from './components/Homepage/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Outlet />
    </div>
  );
}

export default App;
