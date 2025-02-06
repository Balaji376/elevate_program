import { reducerFunction } from "./reduce";
import { createStore } from 'redux'
export const store=createStore(reducerFunction)