import NavBar from './objects/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Make sure this matches the component name
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './protectedRoutes/protectedRoutes';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<ProtectedRoute page ={<Dashboard />}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
