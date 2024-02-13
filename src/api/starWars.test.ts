import axios from 'axios';
import Planet from '../interfaces/planet';
import Starships from '../interfaces/starships';

const apiUrl = 'https://swapi.dev/api/';

test('Get info about film from API SWAPI', async () => {
  const specificFilmsUrl = `${apiUrl}films/1`;
  const response = await axios.get(specificFilmsUrl);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('title', 'A New Hope');
  expect(response.data).toHaveProperty('director', 'George Lucas');
  expect(response.data).toHaveProperty('release_date', '1977-05-25');
});


test('Get names of all planets and climats from SWAPI', async () => {
  const specificPlanetsUrl = `${apiUrl}planets/`;
  const response = await axios.get<{ results: Planet[] }>(specificPlanetsUrl);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
  expect(Array.isArray(response.data.results)).toBe(true);
  const planetInfo = response.data.results.map((planet: Planet) => `${planet.name} - Climate: ${planet.climate}`);
  expect(planetInfo.length).toBeGreaterThan(0);
  console.log(planetInfo.join('\n'));
});


test('Send HEAD request to SWAPI', () => {
  const specificPeopleUrl = `${apiUrl}people`;
  return axios.head(specificPeopleUrl).then(response => {
    expect(response.status).toBe(200);
    expect(response.headers).toHaveProperty('content-type', 'application/json');
    console.log('Response Headers:', response.headers);
    console.log('Date:', response.headers['date']);
  });
});

test('Get information about starships from SWAPI', async () => {
  const specificShipsUrl = `${apiUrl}starships`;
  const response = await axios.get<{ results: Starships[] }>(specificShipsUrl);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('results');
  expect(Array.isArray(response.data.results)).toBe(true);
  response.data.results.forEach((starship: Starships) => {
    expect(starship).toHaveProperty('name');
    console.log('Starship Name:', starship.name);
  });
});

test('Check model of a specific starship from SWAPI', async () => {
  const specificShipUrl = `${apiUrl}starships/3`;
  const response = await axios.get(specificShipUrl);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('model', 'Imperial I-class Star Destroyer');
  console.log('Starship Model:', response.data.model);
});