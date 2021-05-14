import axios from "axios";

export const request = () => {
    axios.get('http://localhost:3000/v1/getChannel')
    .then( (response) => console.log(response))
    .catch((err) => console.log(err))
}