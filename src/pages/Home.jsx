import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCoutries] = useState(null);
  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      setCoutries(countries);
    })();
  }, []);
  return (
    <Section>
      <Container>
        {Array.isArray(countries) && countries.length > 0 && (
          <CountryList countries={countries} />
        )}
      </Container>
    </Section>
  );
};

export default Home;
