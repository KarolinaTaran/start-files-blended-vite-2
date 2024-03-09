import st from './GridItem.module.css';
export const GridItem = ({ children }) => {
  return <li className={st.item}>{children}</li>;
};
