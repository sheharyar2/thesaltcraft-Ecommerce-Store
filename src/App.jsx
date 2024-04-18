import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from "./components/footer/Footer";

function App() {
 
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
