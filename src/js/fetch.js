import axios from "axios";

export class FetchMovies {
    constructor() {
        this.mediaTypes = 'movies'; 
        this.timeWindow = 'day';
    }

    async fetchPopularMovies() {
        const BASE_URL = 'https://api.themoviedb.org/3';
        const params = {
            key: "298b3ba9f2c0a557e7d7fc47b0ac595b",
        };

        const { key } = params;
        const url = `${BASE_URL}/trending/${this.mediaTypes}/${this.timeWindow}?api_key=${key}`

        try {
            const response = await axios.get(url);
            const data = await response.data;
            const items = await data.results;
            return items;
        } catch (error) {
            console.log(error)
        }
    }
}

