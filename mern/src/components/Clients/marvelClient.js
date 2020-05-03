const MARVEL_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/publisher/Marvel%20Comics";

export default class marvelClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(MARVEL_ENDPOINT);
    return response.json();
  }
}
