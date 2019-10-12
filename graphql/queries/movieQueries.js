import gql from "graphql-tag";

export const GET_ALL_MOVIES = gql`
    query getAllUsers {
        movies {
            title
            year
            rating
            actors {
                name
                birthday
                country
                directors {
                    name
                    birthday
                    country
                }
            }
        }
    }
`;
