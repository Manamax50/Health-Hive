import NavBar from './objects/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Make sure this matches the component name
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
