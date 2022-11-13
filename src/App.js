import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './views/Index';
import PlaceToStay from './views/PlaceToStay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/place to stay" element={<PlaceToStay/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
