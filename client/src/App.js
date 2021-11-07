import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import { Footer } from './components';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

      </Router>
      <Footer />
    </div>

  );
}
export default App;
