import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Clients from './view_clients/Clients';
import Buy from './Buy/Buy';
import Classes from './Classes/Classes';
import Cancel from './Cancel/Cancel';
import Book from './Book/Book';
import Dash from './Layout';
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/report" element={<Clients />} />
      <Route path="/book" element={<Book />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/create" element={<Classes />} />
      <Route
          path="*"
          element={<Navigate to="/" />}
      />
    </Routes>
  </Router>
  );
}
export default App;