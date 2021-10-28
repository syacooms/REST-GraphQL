import { request } from 'graphql-request'
import axios from "axios";

const URL = 'http://localhost:8000/graphql'

export const fetcher = (query, variables = {}) => request(URL, querry, variables)


/* 
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])
*/

export default fetcher
