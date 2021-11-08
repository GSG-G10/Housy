import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchSection, CardsSection } from '../components/SearchPgComponent';

function ResultSearch() {
  const [search] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const getSearchResult = async () => {
      const result = await axios.get(
        'api/v1/estate/search',
      );
      setSearchResult(result.data.data);
    };
    getSearchResult();
  }, [search]);
  return (
    <>
      <SearchSection />
      <CardsSection estates={searchResult} />
    </>
  );
}

export default ResultSearch;
