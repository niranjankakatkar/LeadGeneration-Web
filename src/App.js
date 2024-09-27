import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
