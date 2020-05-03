const DC_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/publisher/DC%20Comics";

export default class dcClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(DC_ENDPOINT);
    return response.json();
  }
}
