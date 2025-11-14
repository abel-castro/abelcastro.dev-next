import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_BLOG_GRAPHQL_URL,
        fetchOptions: {
            mode: 'cors',
        },
        credentials: 'include',
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;
