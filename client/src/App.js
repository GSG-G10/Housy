import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import { Footer } from './components';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Signup />
        <Footer />
      </Router>
    </div>

  );
}
export default App;
