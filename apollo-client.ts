import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const apolloClient = new ApolloClient({
    link: createHttpLink({
        uri: process.env.BLOG_GRAPHQL_URL,
        fetchOptions: {
            mode: 'cors',
        },
        credentials: 'include',
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;
