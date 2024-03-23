import { Container, CountryList, Section } from 'components';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [userQuery, setUserQuery] = useState(null);
  const [countriesList, setCoutriesList] = useState(null);
  const searchCountryByRegion = query => {
    setUserQuery(query);
  };

  useEffect(() => {
    (async () => {
      if (userQuery === null) return;
      const countries = await fetchByRegion(userQuery);
      setCoutriesList(countries);
    })();
  }, [userQuery]);

  return (
    <Section>
      <Container>
        <SearchForm searchCountryByRegion={searchCountryByRegion} />
        {Array.isArray(countriesList) && countriesList.length > 0 && (
          <CountryList countries={countriesList} />
        )}
      </Container>
    </Section>
  );
};

export default SearchCountry;
