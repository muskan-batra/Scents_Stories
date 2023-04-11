import {Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import './App.css'

function App() {

  return (
    <>
    <header className='header-bg'>

    < Navbar />
    <Header />
    </header>
  
  
    
   
   


{/* 
    // <Routes>

    // <Route path="/" element={<Home />} />
    // <Route path="/menu" element={<Menu />} />
    // <Route path="/about" element={<About />} />
    // <Route path="/contact" element={<Contact />} />
    // </Routes> */}
    </>
  );
}

export default App;
