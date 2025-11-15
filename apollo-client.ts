import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const graphqlUrl = process.env.NEXT_PUBLIC_BLOG_GRAPHQL_URL;

if (!graphqlUrl) {
    throw new Error(
        'NEXT_PUBLIC_BLOG_GRAPHQL_URL environment variable is not set. Please configure it in your environment variables.',
    );
}

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: graphqlUrl,
        fetchOptions: {
            mode: 'cors',
        },
        credentials: 'include',
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;
