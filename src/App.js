import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import ShowCoin from './components/ShowCoin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<ShowCoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
