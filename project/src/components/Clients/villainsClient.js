const VILLAINS_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/status/Evil";

export default class villainsClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(VILLAINS_ENDPOINT);
    return response.json();
  }
}
