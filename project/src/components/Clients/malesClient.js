const MALES_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/gender/Male";

export default class malesClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(MALES_ENDPOINT);
    return response.json();
  }
}
