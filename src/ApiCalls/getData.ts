import axios, { AxiosResponse } from "axios";

export const request = () => {
    axios.get('http://localhost:3000/v1/getChannel')
    .then( (response) => console.log(response.data))
    .catch((err) => console.log(err))
}

export const postTest = (msg: string) => {
    axios.post('http://localhost:3000/v1/test', { body: `${msg}` })
}

export const test = () => {
    axios.post("http://localhost:3000/v1/auth", {
        body: `test` 
    }, 
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5ZmUyYTdiNjc5NTIzOTYwNmNhMGE3NTA3OTRhN2JkOWZkOTU5NjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAzNDQwODk0Mjk2MC0wZ3MzaTlxMzRmOWZtZzdqMDRtcDFnZ2hrcGpsYzR1Yy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMzQ0MDg5NDI5NjAtMGdzM2k5cTM0ZjlmbWc3ajA0bXAxZ2doa3BqbGM0dWMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc2MjY4NzUwNzg3ODkzNDQyNzciLCJlbWFpbCI6IndvbGV3bmlja2lAeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJDYXpHR2pmaUVJU1EyUTlVU1lJVkNnIiwibmFtZSI6IldpbGwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2ctZ2lEazk5eTVrZlNJYlJNY2xUc09sNkZBUUtvMF9LdDJUZHZPNXc9czk2LWMiLCJnaXZlbl9uYW1lIjoiV2lsbCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjI0MTE1MDAxLCJleHAiOjE2MjQxMTg2MDEsImp0aSI6IjhkZjVmOTliODUwNmQ0MmQzMzBjYzdjMTRiMzUwNzA2NDExNDBmMTUifQ.bMQQkAaz0bGsKih4MhKvStt5RbAWBa5JkxeajXXN5D7XxCkE-E_jeFjdd8CvErkax_HWZhV4DXrnaSte32_Oaqz_jGgKhtJ9JyzPcsyhCmZY5faxnlYhygGtEhmi-wLX_H3haBIX87l27JYwifaBcueTPFjBOOHU9vW5w8A_vULDj8C5r4ouC-6O24prpajKKtgwfpaMHCQdcCxJrZKXNrS8vj0zp63WK_BYX3-YRl-2gUpwk_XukpJ4fP0nQKFIz39eX20nWuABOCzq2oXyHNW8f62A87gkErMHAsksPweI8swVXdZf5Q8Ni75IoAGo71AkUz3X4HEfqF34Uf5xMw" 
        }
    })
}
