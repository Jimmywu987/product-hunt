import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import QUERY_COUNTRIES from './ProductHuntQuery.graphql';
export default function Home() {

  const { loading, error, data,called, networkStatus,client} = useQuery(QUERY_COUNTRIES);
  console.log({data})
  console.log({loading})
  console.log({error})

  return (
    <div className="">
     
    </div>
  )
}
