import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './scss/main.scss';

function App() {

  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />

      </Routes>
    </HashRouter>

  );
}

export default App;