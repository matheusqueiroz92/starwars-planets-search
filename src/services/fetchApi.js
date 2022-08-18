const fetchApi = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(URL);
  const response = await request.json();
  const { results } = response;
  const filterResults = results.filter((element) => delete element.residents);
  return filterResults;
};

export default fetchApi;
