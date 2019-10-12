import gql from "graphql-tag";

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                id
                name
            }
        }
    }
`;
export const ADD_MOVIE = gql`
    mutation addMovie($title: String!, $year: Int!, $rating: String!) {
        addMovie(input: { title: $title, year: $year, rating: $rating }) {
            title
        }
    }
`;
export const DELETE_MOVIE = gql`
    mutation deleteMovie($title: String!) {
        deleteMovie(input: { title: $title }) {
            deleted
        }
    }
`;
