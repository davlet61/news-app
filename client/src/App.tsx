import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewsList from './components/NewsList/NewsList';
import Home from './components/pages/Home';
import Latest from './components/pages/Latest';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/search" element={<NewsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
