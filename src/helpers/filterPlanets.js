const filterPlanets = (planets, nameFilter, filters) => {
  let filteredPlanets = [...planets];

  filteredPlanets = filteredPlanets.filter((planet) => planet.name.toLowerCase()
    .includes(nameFilter.toLowerCase()));

  filters.forEach(({ column, comparison, valueFilter }) => {
    if (comparison === 'maior que') {
      filteredPlanets = filteredPlanets
        .filter((element) => parseFloat(element[column]) > parseFloat(valueFilter));
    } else if (comparison === 'menor que') {
      filteredPlanets = filteredPlanets
        .filter((element) => parseFloat(element[column]) < parseFloat(valueFilter));
    } else {
      filteredPlanets = filteredPlanets
        .filter((element) => parseFloat(element[column]) === parseFloat(valueFilter));
    }
  });
  return filteredPlanets;
};

export default filterPlanets;
