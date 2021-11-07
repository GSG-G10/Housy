import Footer from './components/Footer/Footer';
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <div className="App">
      <PropertyCard data={{
        type: 'ss', price: '50', beds: '3', baths: '3', rooms: '10', space: '1520',
      }}
      />
      <Footer />
    </div>

  );
}

export default App;
