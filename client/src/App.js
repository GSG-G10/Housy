import { BrowserRouter as Router } from 'react-router-dom';
import PropertyCard from './components/PropertyCard';
import NavBar from './components/Navbar';
import { Footer } from './components';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <PropertyCard data={{
          type: 'ss', price: '50', beds: '3', baths: '3', rooms: '10', space: '1520',
        }}
        />

      </Router>
      <Footer />
    </div>

  );
}
export default App;
