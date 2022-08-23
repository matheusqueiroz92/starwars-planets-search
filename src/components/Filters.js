import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './filters.css';

const Filters = () => {
  const {
    nameFilter,
    setNameFilter,
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  const [selectFilters, setSelectFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filtered, setFiltered] = useState({
    column: 'population',
    comparison: 'maior que',
    valueFilter: '0',
  });

  const arrComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const removeAllFilters = () => {
    setFilters([]);
  };

  const removeFilter = ({ target: { name } }) => {
    const elementRemove = filters[name];
    const remove = filters.filter((element) => element !== elementRemove);
    setFilters(remove);
    setSelectFilters((preveSelectFilters) => ([
      ...preveSelectFilters,
      filters[name].column,
    ]));
  };

  useEffect(() => {
    const handleFilters = () => {
      setFiltered((prevFilters) => ({
        ...prevFilters,
        column: selectFilters[0],
        comparison: 'maior que',
        valueFilter: '0',
      }));
    };
    handleFilters();
  }, [selectFilters]);

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
    setSelectFilters(
      selectFilters
        .filter((element) => element !== filtered.column),
    );
  };

  const { column, comparison, valueFilter } = filtered;
  return (
    <div>
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
              { selectFilters
                .map((filter, index) => <option key={ index }>{ filter }</option>) }
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
              { arrComparison
                .map((element, index) => <option key={ index }>{ element }</option>) }
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
            Filtrar
          </button>
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ removeAllFilters }
          >
            Remover Filtros
          </button>
        </div>
      </form>
      <div>
        { filters.length > 0
          ? filters.map((element, index) => (
            <div className="div-filters" key={ (`d ${index}`) } data-testid="filter">
              <p key={ (`p ${index}`) }>
                { (`${element.column} ${element.comparison} ${element.valueFilter}`) }
              </p>
              <button
                type="button"
                name={ index }
                key={ (`b ${index}`) }
                onClick={ removeFilter }
              >
                x
              </button>
            </div>))
          : <p /> }
      </div>
    </div>
  );
};

export default Filters;
