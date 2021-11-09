import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchSection, CardsSection } from '../components/SearchPgComponent';

function ResultSearch() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(async () => {
    const result = await axios.get(
      'api/v1/estate/search',
    );
    setSearchResult(result.data.data);
  }, []);
  return (
    <>
      <SearchSection handleSearch={setSearchResult} />
      <CardsSection estates={searchResult} handleSearch={setSearchResult} />
    </>
  );
}

export default ResultSearch;
