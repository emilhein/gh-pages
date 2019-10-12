import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";

import VueApollo from "vue-apollo";
const getHeaders = () => {
    const headers = {};
    const token = window.localStorage.getItem("apollo-token");
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return headers;
};

const httpLink = new HttpLink({
    uri: "https://w7lo1gta9h.execute-api.eu-west-1.amazonaws.com/dev/graphql", //process.env.VUE_APP_GRAPHQL_ENDPOINT
    headers: getHeaders()
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            // eslint-disable-next-line
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    // eslint-disable-next-line
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

// Install the Vue plugin

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});
