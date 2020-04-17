const CHARACTER_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character";

//

// http://localhost:8080/character

export default class Client {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(CHARACTER_ENDPOINT);
    return response.json();
  }

  async fetchAllMovies() {}
}
