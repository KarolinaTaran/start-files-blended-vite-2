import { useSelector, useDispatch } from 'react-redux';
import { selectText, setText } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = ev => {
    dispatch(setText(ev.target.value));
  };
  const value = useSelector(selectText);
  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
