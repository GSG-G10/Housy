import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

      </Router>
    </div>

  );
}

export default App;
