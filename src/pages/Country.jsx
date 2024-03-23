import { Container, CountryInfo, Section } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const location = useLocation();
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    (async () => {
      const country = await fetchCountry(countryId);
      setCountry(country);
    })();
  }, [countryId]);
  return (
    <Section>
      <Container>
        {country && <CountryInfo country={country} state={location.state} />}
      </Container>
    </Section>
  );
};
export default Country;
