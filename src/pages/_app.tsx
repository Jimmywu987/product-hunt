import '../../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Layout from "../components/globalComponents/layout"

const {NEXT_PUBLIC_PH_ACCESS_TOKEN} = process.env
const client = new ApolloClient({
  uri: "https://api.producthunt.com/v2/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Host": "api.producthunt.com",
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${NEXT_PUBLIC_PH_ACCESS_TOKEN}`
  }
});



function MyApp({ Component, pageProps }) {
 
  return (<ApolloProvider client={client}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ApolloProvider>)
}

export default MyApp