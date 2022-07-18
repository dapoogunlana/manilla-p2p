import axios from 'axios';

const content = {
    type: 'json'
};

export const switchContent = (type: string) => {
    content.type = type;
    setTimeout(()=> content.type = 'json', 1000)
}

const returnHeader = (type: string) => {
    console.log(type)
    if(type === 'json') {
        return {
            "Content-type": "Application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"*"
        }
    } else if (type === 'form') {
        return {
            "Content-type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"*"
        }
    }
}

const devUrl = 'http://localhost:3500/api/v4/';
const url = 'https://vanilla-network.herokuapp.com/api/v4/';

const request = axios.create({
    baseURL: `${devUrl}`
})
request.interceptors.request.use((req: any) => {

    console.log(req);

    req.headers = returnHeader(content.type)

    return req
})

export default request;

export{
    request
}
