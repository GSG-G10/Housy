import Navbar from '../../components/Navbar';
import PropertyCard from '../../components/PropertyCard';

// import { Footer } from '../../components';
import backgroundImage from '../../assets/background.png';
import './estate.css';

function Estate() {
  return (
    <div>
      <Navbar />
      <img src={backgroundImage} alt="background" className="background" />
      <PropertyCard
        data={{
          type: 'ss', price: '50', beds: '3', baths: '3', rooms: '10', space: '1520',
        }}
        className="PropertyCard"
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Estate;
