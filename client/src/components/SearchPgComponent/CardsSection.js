import PropTypes from 'prop-types';
import CardHouse from '../CardHouse';
import FilterComponent from './FilterSide';

import './style.css';

function CardsSection({ estates }) {
  console.log(estates);
  return (
    <div className="cards-section-wrapper">
      <FilterComponent />
      <section className="cards-section">
        {

          estates.length ? estates.map((estate) => (
            <CardHouse key={estate.id} estate={estate} />
          )) : 'Loading ....'
        }
      </section>
    </div>
  );
}
CardsSection.propTypes = {
  estates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsSection;
