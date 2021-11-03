import {
  AppBar, Container, Link,
} from '@mui/material';
import {
  AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiOutlineWhatsApp,
} from 'react-icons/ai';
import HomeIcon from '../../assets/homeIcon.png';

import './footer.css';

export default function Footer() {
  return (

    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: 'auto', bottom: 0 }}
      style={{
        background: '#3381CB', height: '432px', alignItems: 'center',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '10px',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <section className="img">
          <img
            src={HomeIcon}
            alt="home icon"
            loading="lazy"
            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: '6rem' }}
          />

        </section>
        <section className="section2">
          <section className="about-us">
            <p>
              About Us
            </p>
            <Link href="http://" color="inherit" underline="none">Story</Link>
            <Link href="http://" color="inherit" underline="none">Clients</Link>
            <Link href="http://" color="inherit" underline="none">Testimonials</Link>

          </section>
          <section className="services">
            <p>
              Services
            </p>
            <Link href="http://" color="inherit" underline="none">Marketing</Link>
            <Link href="http://" color="inherit" underline="none">Consulting</Link>
            <Link href="http://" color="inherit" underline="none">Development</Link>
            <Link href="http://" color="inherit" underline="none">Design</Link>

          </section>

          <section className="contact-us">
            <p>
              Contact Us
            </p>
            <Link href="http://" color="inherit" underline="none">United States</Link>
            <Link href="http://" color="inherit" underline="none">United Kingdom</Link>
            <Link href="http://" color="inherit" underline="none">Australia</Link>
            <Link href="http://" color="inherit" underline="none">Support</Link>

          </section>

          <section className="social">
            <p>
              Social
            </p>
            <Link href="http://" color="inherit" underline="none">
              <AiFillFacebook size={22} />
              Facebook
            </Link>
            <Link href="http://" color="inherit" underline="none">
              <AiFillTwitterCircle size={22} />
              Twitter
            </Link>
            <Link href="http://" color="inherit" underline="none">
              <AiFillInstagram size={22} />
              Instagram
            </Link>
            <Link href="http://" color="inherit" underline="none">
              <AiOutlineWhatsApp size={22} />
              WhatsApp
            </Link>

          </section>

        </section>
      </Container>
      <section className="copyright">
        <div style={{ color: '#1B4B80' }}>All right reserved @ to this website</div>
      </section>
    </AppBar>

  );
}
