// MemoryDataProvider
// import { readFileSync } from "fs";
// import { MemoryDataProvider } from "./memory";
// //const jsonData = JSON.parse(readFileSync("tests/test-data.json", "utf-8"));
// const jsonData = JSON.parse(readFileSync("tests/sample-data.json", "utf-8"));
// export const activeDataProvider = new MemoryDataProvider(jsonData);
// Rest-API Data Provider
//import { RestAPIDataProvider } from './rest-api';
import apolloClient from '../apollo-client';
import { GraphqlDataProvider } from './graphql';

const activeDataProvider = new GraphqlDataProvider(apolloClient);

export default activeDataProvider;
