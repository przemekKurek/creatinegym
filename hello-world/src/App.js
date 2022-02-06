import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Clients from './view_clients/Clients';
import Buy from './Buy/Buy';
import Classes from './Classes/Classes';
import Cancel from './Cancel/Cancel';
import Book from './Book/Book';
import Report from './Report/Report';
import Request from './Requests/Requests';
import Header from './component/home';
import Navbar from './component/Navbar';

import './App.css';


function App() {
  return (
    <Router>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/report" element={<Report />} />
      <Route path="/book" element={<Book />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/create" element={<Classes />} />
      <Route path="/request" element={<Request />} />
      <Route
          path="*"
          element={<Navigate to="/" />}
      />
    </Routes>
  </Router>
  );
}
export default App;