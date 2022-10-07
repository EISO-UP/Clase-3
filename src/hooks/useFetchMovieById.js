import { useEffect, useState } from "react"
import { getMovieById } from "../helpers/getMovieById";

export const useFetchMovieById = () => {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getMovie = async (movieId, language) => {
        const results = await getMovieById(movieId);
        setIsLoading(false);
        setMovies(results);
    }
    useEffect (() => {
        getMovie(movieId);
    }, []);

    return {
        movies,
        isLoading
    }
}
