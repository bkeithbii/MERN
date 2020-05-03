const CHARACTER_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character";

// const CHARACTER_ENDPOINT2 =
//   "https://heroes-and-villains-bb.herokuapp.com/character/status/Good";

// http://localhost:8080/character

export default class Client {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(CHARACTER_ENDPOINT);
    return response.json();
  }
}
