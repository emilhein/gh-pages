module.exports = {
    client: {
        service: {
            name: "my-app",
            // URL to the GraphQL API
            url: "https://w7lo1gta9h.execute-api.eu-west-1.amazonaws.com/dev/graphql"
        },
        // Files processed by the extension
        includes: ["src/**/*.vue", "src/**/*.js"]
    }
};
