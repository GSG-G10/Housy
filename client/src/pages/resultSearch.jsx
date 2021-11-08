import { useState } from 'react';
import { SearchSection, CardsSection } from '../components/SearchPgComponent';

function ResultSearch() {
  // const [search] = useState({
  //   type: '',
  //   category: '',
  //   location: '',
  //   price: '',
  //   roomNumbers: '',
  //   bathRooms: '',
  //   space: '',
  // });
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <SearchSection handleSearch={setSearchResult} />
      <CardsSection estates={searchResult} handleSearch={setSearchResult} />
    </>
  );
}

export default ResultSearch;
