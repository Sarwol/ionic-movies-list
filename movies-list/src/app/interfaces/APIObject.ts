import { Movie } from './Movie';

export interface APIObject {
    Search: Movie[];
    totalResults: string;
    Response: string;
}