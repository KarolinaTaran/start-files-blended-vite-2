import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(item => {
        return (
          <GridItem key={item.id}>
            <Link>
              <img src={item.flag} alt={item.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
