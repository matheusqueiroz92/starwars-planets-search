import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './filtersResults.css';

const FiltersResults = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const removeFilter = ({ target: { name } }) => {
    const elementRemove = filters[name];
    const remove = filters.filter((element) => element !== elementRemove);
    setFilters(remove);
  };
  return (
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
              data-testid="button-remove-filters"
            >
              x
            </button>
          </div>))
        : <p /> }
    </div>
  );
};

export default FiltersResults;
