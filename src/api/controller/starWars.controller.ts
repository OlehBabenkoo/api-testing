import axios from 'axios';
import Planet from '../../interfaces/planet';
import Starship from '../../interfaces/starships';
import Movie from '../../interfaces/movie';
import HeadResponse from '../../interfaces/headResponce';

export default class StarWarsApi {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async getFilmInfo(): Promise<Movie> {
    const specificFilmsUrl = `${this.apiUrl}films/1`;
    const response = await axios.get<Movie>(specificFilmsUrl);
    return response.data;
  }

  public async getPlanetsInfo(): Promise<string[]> {
    const specificPlanetsUrl = `${this.apiUrl}planets/`;
    const response = await axios.get<{ results: Planet[] }>(specificPlanetsUrl);
    return response.data.results.map((planet: Planet) => `${planet.name} - Climate: ${planet.climate}`);
  }

  public async sendHeadRequest(): Promise<HeadResponse> {
    const specificPeopleUrl = `${this.apiUrl}people`;
    const response = await axios.head(specificPeopleUrl);
    return {
      headers: response.headers as Record<string, string>,
      date: response.headers['date'],
    };
  }

  public async getStarshipsInfo(): Promise<string[]> {
    const specificShipsUrl = `${this.apiUrl}starships`;
    const response = await axios.get<{ results: Starship[] }>(specificShipsUrl);
    return response.data.results.map((starship: Starship) => starship.name);
  }

  public async getSpecificStarshipModel(starshipId: number): Promise<string> {
    const specificShipUrl = `${this.apiUrl}starships/${starshipId}`;
    const response = await axios.get(specificShipUrl);
    return response.data.model;
  }
}
