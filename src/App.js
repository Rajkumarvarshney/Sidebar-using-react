import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Team from './components/Team';
import Channel from './components/Channel';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="first">
        <Navbar />
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/channel" element={<Channel />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
