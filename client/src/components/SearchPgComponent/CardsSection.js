import PropTypes from 'prop-types';
import CardHouse from '../CardHouse';
import FilterComponent from './FilterSide';
import './style.css';

function CardsSection({ estates, handleSearch }) {
  return (
    <div className="cards-section-wrapper">
      <FilterComponent handleSearch={handleSearch} />
      <section className="cards-section">
        {
          estates.length ? estates.map((estate) => (
            estate.available && <CardHouse key={estate.id} estate={estate} />
          )) : 'Loading ....'
        }
      </section>
    </div>
  );
}
CardsSection.propTypes = {
  estates: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default CardsSection;
