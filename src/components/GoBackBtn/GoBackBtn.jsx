import { Link } from 'react-router-dom';

export const GoBackBtn = ({ back }) => {
  return <Link to={back.current}>GoBack</Link>;
};
