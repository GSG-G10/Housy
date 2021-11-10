import PropTypes from 'prop-types';
import './imageSection.css';

function ImageSection({ images }) {
  let imagesarr = Object.values(images);
  const mainImage = imagesarr[0];
  console.log(imagesarr);
  imagesarr = imagesarr.slice(1);
  return (
    <section className="main">
      <section className="bigImage">
        <img
          src={mainImage}
          alt="home"
          loading="lazy"
        />
      </section>
      <section className="anotherImage">
        {imagesarr.map((item) => (
          <img
            src={item}
            alt="home"
            loading="lazy"
          />
        ))}
      </section>
    </section>
  );
}
ImageSection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ImageSection;
