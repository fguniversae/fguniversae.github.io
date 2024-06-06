import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar title={"Ejemplo Header!"} />
        <Routes>
          <Route path='/' element={<Home title={"Bienvenido!"} />} />
        </Routes>
        <MyNavbar title={"Ejemplo Footer!"} />
      </BrowserRouter>
    </>
  );
}

export default App;
