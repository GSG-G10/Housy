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

    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} style={{ background: '#3381CB' }}>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <section className="img">
          <img
            src={HomeIcon}
            alt="home icon"
            loading="lazy"
            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: '5rem' }}
          />

        </section>
        <section className="section2">
          <section className="pages">

            <Link href="http://" color="inherit" underline="none">home</Link>
            <Link href="http://" color="inherit" underline="none">about</Link>
            <Link href="http://" color="inherit" underline="none">privcy</Link>
            <Link href="http://" color="inherit" underline="none">contact us</Link>

          </section>
          <section className="social">

            <Link href="http://" color="inherit" underline="none"><AiFillFacebook size={30} /></Link>
            <Link href="http://" color="inherit" underline="none"><AiFillTwitterCircle size={30} /></Link>
            <Link href="http://" color="inherit" underline="none"><AiFillInstagram size={30} /></Link>
            <Link href="http://" color="inherit" underline="none"><AiOutlineWhatsApp size={30} /></Link>

          </section>
          <section className="copyright">
            <div style={{ color: '#1B4B80' }}>All right reserved @ to this website</div>
          </section>

        </section>
      </Container>
    </AppBar>

  );
}
