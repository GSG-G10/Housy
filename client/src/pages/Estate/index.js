import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../../components/Navbar';
import PropertyCard from '../../components/PropertyCard';
import UserContactCard from '../../components/UserContacatCard';
import ImageSection from '../../components/ImageSection';

// import { Footer } from '../../components';
import backgroundImage from '../../assets/background.png';
import './estate.css';

function Estate() {
  return (
    <div>
      <Navbar />

      <img src={backgroundImage} alt="background" className="background" />
      <Container maxWidth="xl">
        <div className="PropertyCard">
          <PropertyCard
            data={{
              type: 'ss', price: '50', beds: '3', baths: '3', rooms: '10', space: '1520',
            }}
          />
        </div>
        <Typography variant="h3" component="h1" gutterBottom sx={{ pt: 6, color: '#3781CB' }}>
          This is a simple hero unit, a simple jumbotron-style
        </Typography>
        <div className="description-container">
          <div className="description">
            <Typography variant="h4" component="div" gutterBottom>
              DESCRIPTION
            </Typography>

            <Typography variant="subtitle1" gutterBottom sx={{ pt: 6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In bibendum elit magna, ut placerat nunc tempus vel.
              Donec vitae dictum ligula.
              Phasellus congue maximus eleifend.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
              Suspendisse potenti.
              Suspendisse sollicitudin posuere nunc et vehicula.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Maecenas aliquam vitae quam at sodales.
            </Typography>
          </div>
          <UserContactCard
            data={{
              image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              name: 'John Doe',
              phone: '+234 809 809 809',
              email: 'info@gmail.com',
              location: 'Gaza',
            }}
            className="UserContactCard"
          />

        </div>
        <ImageSection images={{
          0: 'https://newsbuzzfeed.com/wp-content/uploads/2021/05/hero_home-1.jpeg', 1: 'https://newsbuzzfeed.com/wp-content/uploads/2021/05/hero_home-1.jpeg', 2: 'https://newsbuzzfeed.com/wp-content/uploads/2021/05/hero_home-1.jpeg', 3: 'https://newsbuzzfeed.com/wp-content/uploads/2021/05/hero_home-1.jpeg',
        }}
        />
      </Container>
      {/* <Footer /> */}
    </div>

  );
}

export default Estate;
