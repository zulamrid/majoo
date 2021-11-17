import axios from "axios";

const api_base = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'

export const GET = async () => {
    return axios({
        baseURL: api_base,
        method: 'get',
    })
 }
