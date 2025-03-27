import logo from './logo.svg';
import { 
  HashRouter as Router,
  Route, 
  Routes, 
  Link
} from "react-router-dom";
import './css/App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Boundaries from "./pages/Boundaries";
import CurrentInterests from "./pages/CurrentInterests";
import Footer from './component/Footer';
import MinecraftVanilla from './pages/Minecraft';

import INCarousel from './component/INCarousel';
import MinecraftCarousel from './component/MinecraftCarousel';
import MCMods from './component/MCMods';
import MCTexturePacks from './component/MCTexturePacks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="boundaries" element={<Boundaries/>} />
          <Route path="interests" element={<CurrentInterests/>}>
            <Route path="nikki" element={<INCarousel/>} />
            <Route path="minecraft" element={<MinecraftCarousel/>} />
          </Route>
          <Route path="minecraftVanilla" element={<MinecraftVanilla/>}>
            <Route path="mods" element={<MCMods/>} />
            <Route path="texture-packs" element={<MCTexturePacks/>} />
          </Route>
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
