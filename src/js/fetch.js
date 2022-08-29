import axios from 'axios';

export class TheMovieDb {
    constructor() {
        this.BASE_URL = 'https://api.themoviedb.org/3';
        this.API_KEY = '298b3ba9f2c0a557e7d7fc47b0ac595b';
        this.lang = 'en-US';
        // this.page = page;
        this.searchQuery = '';
        this.mediaType = 'movie';
        this.timeWindow = 'day';
    }

    async fetchPopularMovies(page) {
        const url = `${this.BASE_URL}/trending/${this.mediaType}/${this.timeWindow}?api_key=${this.API_KEY}&page=${page}&language=${this.lang}&include_adult=false`;
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
            const genres = await data.genres;
            return genres;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchMovieDetails(movieId) {
        const url = `${this.BASE_URL}/movie/${movieId}?api_key=${this.API_KEY}&language=en-US`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch {
            console.log(error);
        }
    }

    async fetchRequestedMovies(query, page) {
        const url = `${this.BASE_URL}/search/${this.mediaType}?api_key=${this.API_KEY}&page=${page}&language=${this.lang}&include_adult=false&query=${query}`
        try {
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    // get query() {
    //     return this.searchQuery;
    // }

    // set query(newQuery) {
    //     this.searchQuery = newQuery;
    // }

    // resetPage() {
    //     this.page = 1;
    // }
}
