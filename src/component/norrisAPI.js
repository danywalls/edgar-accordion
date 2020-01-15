const NORRIS_API = {
  async getChuckNorris() {
    const jokes = await fetch("https://api.chucknorris.io/jokes/random");
    return await jokes.json();
  }
};

export { NORRIS_API };
