import {
  AppBar, Container, Link,
} from '@mui/material';
import HomeIcon from '../../assets/homeIcon.png';
import data from './data';
import './style.css';

export default function Footer() {
  return (
    <section className="footer">
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: 'auto', bottom: 0 }}
        style={{
          background: '#3381CB', alignItems: 'center',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div className="wrapper-image">
            <img
              src={HomeIcon}
              alt="home icon"
              loading="lazy"
              style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, width: '6rem' }}
            />

          </div>
          <div className="wrapper-links section2">
            {
            data.map(({ title, links }, i) => (
              <div className={`${title} footer--list`} key={`${title + links + i}`}>
                <p>
                  {title}
                </p>
                {
                  links.map(({ href, name, children }) => (
                    <Link to={href} color="inherit" underline="none" key={`${href + name + i}`}>
                      {children}
                      {name}
                    </Link>
                  ))
                }
              </div>
            ))
          }
          </div>
        </Container>
        <div className="copyright">
          <p style={{ color: '#1B4B80' }}>All right reserved @ to this website</p>
        </div>
      </AppBar>
    </section>
  );
}
