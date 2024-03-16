import { useEffect, useId, useState } from 'react';
import c from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const elementId = useId();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(changeFilter(value));
  }, [value, dispatch]);

  return (
    <div className={c.container}>
      <label className={c.label} htmlFor={elementId}>
        Find contacts by name
      </label>
      <input
        value={value}
        onChange={handleChange}
        className={c.searchInput}
        type="text"
        id={elementId}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;
