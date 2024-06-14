import NavBar from './Components/NavBar';
import './App.css';
import All from './Components/All';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
          <Route path='/' element={<All/>}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
