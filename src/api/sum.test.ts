import axios from 'axios';

test('Get info about film from API SWAPI', async () => {
  const apiUrl = 'https://swapi.dev/api/films/1/';
  const response = await axios.get(apiUrl);

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('title', 'A New Hope');
  expect(response.data).toHaveProperty('director', 'George Lucas');
});
