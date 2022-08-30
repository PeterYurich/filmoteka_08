import axios from 'axios';

export class TheMovieDb {
    constructor(page, query) {
        this.BASE_URL = 'https://api.themoviedb.org/3';
        this.API_KEY = '298b3ba9f2c0a557e7d7fc47b0ac595b';
        this.lang = 'en-US';
        this.page = page;
        this.query = query;
        this.mediaType = 'movie';
        this.timeWindow = 'day';
    }

    async fetchPopularMovies() {
        const url = `${this.BASE_URL}/trending/${this.mediaType}/${this.timeWindow}?api_key=${this.API_KEY}&page=${this.page}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchGenreList() {
        const url = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`;
        try {
            const response = await axios.get(url);
            const data = await response.data;
            return data.genres;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchMovieDetails(movieId) {
        const url = `${this.BASE_URL}/movie/${movieId}?api_key=${this.API_KEY}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch {
            console.log(error);
        }
    }

    async fetchRequestedMovies() {
        const url = `${this.BASE_URL}/search/${this.mediaType}?api_key=${this.API_KEY}&page=${this.page}&language=${this.lang}&include_adult=false&query=${this.query}`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    // get query() {
    //     return this.query;
    // }

    // set query(newQuery) {
    //     this.query = newQuery;
    // }

    // get page() {
    //     return this.page;
    // }

    // set page(newPage) {
    //     this.page = newPage;
    // }
}
