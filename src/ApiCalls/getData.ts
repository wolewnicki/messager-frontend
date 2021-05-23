import axios, { AxiosResponse } from "axios";

export const request = () => {
    axios.get('http://localhost:3000/v1/getChannel')
    .then( (response) => console.log(response.data))
    .catch((err) => console.log(err))
}

export const postTest = (msg: string) => {
    axios.post('http://localhost:3000/v1/test', { body: `${msg}` })
}