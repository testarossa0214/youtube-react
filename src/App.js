import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Top from './pages/Top'
import Search from './pages/Search'
import Watch from './pages/Watch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
