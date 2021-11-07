import './imageSection.css';

function ImageSection({ arr }) {
  const mainImage = arr[0];
  const images = arr.slice(1);
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
        {images.map((item) => (
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

export default ImageSection;
