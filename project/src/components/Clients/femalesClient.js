const FEMALES_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/gender/Female";

export default class femalesClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(FEMALES_ENDPOINT);
    return response.json();
  }
}
