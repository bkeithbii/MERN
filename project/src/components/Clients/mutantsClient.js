const MUTANTS_ENDPOINT =
  "https://heroes-and-villains-bb.herokuapp.com/character/race/Mutant";

export default class mutantsClient {
  constructor() {}

  async fetchCharacters() {
    const response = await fetch(MUTANTS_ENDPOINT);
    return response.json();
  }
}
