
import HeadBanner from './components/Homepage/HeadBanner';
import Navbar from './components/Homepage/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <HeadBanner/>
      <Outlet/>
    </div>
  );
}

export default App;
