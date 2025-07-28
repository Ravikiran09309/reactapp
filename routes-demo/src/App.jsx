import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home,About,Skills,Project,Contact } from './components/Pages';

function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );

}
export default App