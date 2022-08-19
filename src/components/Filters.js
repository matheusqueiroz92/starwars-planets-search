import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { name, setName } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <form>
      <label htmlFor="name-filter">
        Name:
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
};

export default Filters;
