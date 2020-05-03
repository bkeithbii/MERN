const ALIENS_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/race/Alien";

export default class aliensClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(ALIENS_ENDPOINT);
    return response.json();
  }
}
