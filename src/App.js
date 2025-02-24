
import HeadBanner from './components/Homepage/HeadBanner';
import Navbar from './components/Homepage/NavBar';
import { Outlet } from 'react-router-dom';
import PromoBanner from './components/Homepage/PromoBanner';

function App() {
  return (
    <div>
      <Navbar/>
      <HeadBanner/>
      <PromoBanner/>
      <Outlet/>
    </div>
  );
}

export default App;
