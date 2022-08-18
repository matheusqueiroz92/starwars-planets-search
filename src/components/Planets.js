import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Planets = () => {
  const { planets } = useContext(StarWarsContext);
  //   const keysPlanets = Object.keys(planets[0]);
  //   console.log(keysPlanets);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Rotation Period</td>
          <td>Orbital Period</td>
          <td>Diameter</td>
          <td>Climate</td>
          <td>Gravity</td>
          <td>Terrain</td>
          <td>Surface Water</td>
          <td>Population</td>
          <td>Films</td>
          <td>Created</td>
          <td>Edited</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>))}
      </tbody>
    </table>
  );
};

export default Planets;
