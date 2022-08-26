import axios from "axios";

export class TheMovieDb {
    constructor() {
        this.mediaTypes = "movie";
        this.timeWindow = "day";
        this.BASE_URL = "https://api.themoviedb.org/3";
        this.key = "298b3ba9f2c0a557e7d7fc47b0ac595b";
        this.lang = "en-US";
        this.page = 1;
        this.searchQuery = "";
    }

    async fetchPopularMovies() {
        const url = `${this.BASE_URL}/trending/${this.mediaTypes}/${this.timeWindow}?api_key=${this.key}&page=${this.page}&language=${this.lang}&include_adult=false`

        try {
            const response = await axios.get(url);
            const data = await response.data;
            const items = await data.results;
            return items;
        } catch (error) {
            console.log(error)
        }
    }

    async fetchGenreList() {
        const url = `${this.BASE_URL}/genre/movie/list?api_key=${this.key}`

        try {
            const response = await axios.get(url);
            const data = await response.data;
            const genres = await data.genres;
            return genres;
        } catch (error) {
            console.log(error)
        }
    }

    async fetchMovieDetails(movieId) {
        const url = `${this.BASE_URL}/movie/${movieId}?api_key=${this.key}&language=en-US`
        try {
            const response = await axios.get(url)
            console.log("fetchMovieDetails:", response.data)
            return response.data
        } catch {
            console.log(error)
        }
    }

    async fetchFilmsDetails(filmIds) {

        const films = []
        for (let i = 0; i < filmIds.length; i += 1) {
            const film = await this.fetchMovieDetails(filmIds[i])
            films.push(film)
        }
        console.log("films:", films)
    }

    increasePage() {
        this.page += 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    resetPage() {
        this.page = 1;
    }

}


