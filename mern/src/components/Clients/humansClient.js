const HUMANS_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/race/Human";

export default class humansClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(HUMANS_ENDPOINT);
    return response.json();
  }
}
