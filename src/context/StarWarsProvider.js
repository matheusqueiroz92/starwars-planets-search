import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    (async () => {
      const planetsData = await fetchApi();
      setPlanets(planetsData);
    })();
  }, []);

  const planetsContext = {
    planets,
    nameFilter,
    setNameFilter,
    filters,
    setFilters,
  };

  const { Provider } = StarWarsContext;

  return (
    <Provider value={ planetsContext }>
      {children}
    </Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
