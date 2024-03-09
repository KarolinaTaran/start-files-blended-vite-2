import st from './Grid.module.css';

export const Grid = ({ children }) => {
  return <ul className={st.list}>{children}</ul>;
};
