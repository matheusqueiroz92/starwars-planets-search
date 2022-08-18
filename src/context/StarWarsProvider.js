import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (async () => {
      const planetsData = await fetchApi();
      setPlanets(planetsData);
    })();
  }, []);

  const planetsContext = {
    planets,
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
