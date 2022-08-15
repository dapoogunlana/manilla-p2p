import axios from 'axios';
import { apiLinks } from '../../config/environment';
import { IrequestFormat } from '../constants/interfaces/request-schema';

export const sendRequest = (params: IrequestFormat, success: Function, failure: Function) => {
    const request = params.external ? axios.create({}) : axios.create({ baseURL: apiLinks.url });
    request.interceptors.request.use((req: any) => {
    
        if(params.header) {
            req.headers = params.header
        }
        return req 
    })
    return request(params.url,{
        method: params.method || 'GET',
        data: params.body
    })
    .then((result) => success(result?.data))
    .catch(error => failure(error.response?.data));
}