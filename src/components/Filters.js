import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { nameFilter, setNameFilter, setFilters } = useContext(StarWarsContext);
  const [filtered, setFiltered] = useState({
    column: 'population',
    comparison: 'maior que',
    valueFilter: '0',
  });

  const handleChangeName = ({ target: { value } }) => {
    setNameFilter(value);
  };

  const handleChangeFilters = ({ target: { name, value } }) => {
    setFiltered((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters((prevFilters) => ([
      ...prevFilters,
      filtered,
    ]));
  };

  const { column, comparison, valueFilter } = filtered;
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name-filter">
        Nome:
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ handleChangeName }
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          Coluna:
          <select
            id="column-filter"
            data-testid="column-filter"
            name="column"
            value={ column }
            onChange={ handleChangeFilters }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador:
          <select
            id="comparison-filter"
            name="comparison"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ handleChangeFilters }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          Valor:
          <input
            id="value-filter"
            type="number"
            data-testid="value-filter"
            name="valueFilter"
            value={ valueFilter }
            onChange={ handleChangeFilters }
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default Filters;
