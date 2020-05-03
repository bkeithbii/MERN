const HEROES_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/status/Good";

export default class heroesClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(HEROES_ENDPOINT);
    return response.json();
  }
}
