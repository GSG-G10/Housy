import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import SearchPage from './pages/resultSearch';
import { Footer } from './components';
// import Login from './components/login';

function App() {
  return (
    <Router>
      <NavBar />
      <SearchPage />
      <Footer />
    </Router>
  );
}
export default App;
