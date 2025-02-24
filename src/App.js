
import HeadBanner from './components/Homepage/HeadBanner';
import Navbar from './components/Homepage/NavBar';
import { Outlet } from 'react-router-dom';
import PromoBanner from './components/Homepage/PromoBanner';
import ProductSection from './components/Homepage/ProductSection';

function App() {
  return (
    <div>
      <Navbar/>
      <HeadBanner/>
      <PromoBanner/>
      <ProductSection/>
      <Outlet/>
    </div>
  );
}

export default App;
