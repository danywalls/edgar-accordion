const NORRIS_API = {
    async getChuckNorris() {
        const jokes = await fetch('https://api.chucknorris.io/jokes/random');
        const jokesResponse = await jokes.json();
        return jokesResponse;
    }
}


export {NORRIS_API};