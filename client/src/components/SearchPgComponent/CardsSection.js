import CardHouse from '../CardHouse';
import FilterComponent from './FilterSide';
import './style.css';

function CardsSection() {
  return (
    <div className="cards-section-wrapper">
      <FilterComponent />
      <section className="cards-section">
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
      </section>
    </div>
  );
}

export default CardsSection;
