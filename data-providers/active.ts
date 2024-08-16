// MemoryDataProvider
// import { readFileSync } from "fs";
// import { MemoryDataProvider } from "./memory";
// //const jsonData = JSON.parse(readFileSync("tests/test-data.json", "utf-8"));
// const jsonData = JSON.parse(readFileSync("tests/sample-data.json", "utf-8"));
// export const activeDataProvider = new MemoryDataProvider(jsonData);
// Rest-API Data Provider
import { RestAPIDataProvider } from './rest-api';

export const activeDataProvider = new RestAPIDataProvider();
