import StarWarsApi from '../../src/api/controller/starWars.controller';

const apiUrl = 'https://swapi.dev/api/';
const api = new StarWarsApi(apiUrl);

test('Get info about film from API SWAPI', async () => {
  const filmInfo = await api.getFilmInfo();
  expect(filmInfo).toHaveProperty('title', 'A New Hope');
  expect(filmInfo).toHaveProperty('director', 'George Lucas');
  expect(filmInfo).toHaveProperty('release_date', '1977-05-25');
});

test('Get names of all planets and climats from SWAPI', async () => {
  const planetInfo = await api.getPlanetsInfo();
  expect(planetInfo.length).toBeGreaterThan(0);
  console.log(planetInfo.join('\n'));
});

test('Send HEAD request to SWAPI', async () => {
  const headInfo = await api.sendHeadRequest();
  expect(headInfo.headers).toHaveProperty('content-type', 'application/json');
  console.log('Response Headers:', headInfo.headers);
  console.log('Date:', headInfo.date);
});

test('Get information about starships from SWAPI', async () => {
  const starshipNames = await api.getStarshipsInfo();
  starshipNames.forEach((name: string) => {
    console.log('Starship Name:', name);
  });
});

test('Check model of a specific starship from SWAPI', async () => {
  const starshipModel = await api.getSpecificStarshipModel(3);
  expect(starshipModel).toBe('Imperial I-class Star Destroyer');
  console.log('Starship Model:', starshipModel);
});
