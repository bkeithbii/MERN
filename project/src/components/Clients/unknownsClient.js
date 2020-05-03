const UNKNOWNS_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/race/Unknown";

export default class unknownsClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(UNKNOWNS_ENDPOINT);
    return response.json();
  }
}
