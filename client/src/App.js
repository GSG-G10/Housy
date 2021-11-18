import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import { Footer } from './components';
// import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Footer />
      </Router>
    </div>

  );
}
export default App;
