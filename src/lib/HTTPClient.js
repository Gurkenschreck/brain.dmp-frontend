import axios from 'axios';

/**
 * The HTTPClient is an utility class to make the HTTP calls
 * to the API endpoint. It is a wrapper around 'axios' and provides
 * several helper functions.
 * This class makes use of ES7 async functions.
 */
export class HTTPClient {

    get axiosClient() {
        return this._axiosClient;
    }

    constructor(axiosConf){
        if(!axiosConf || typeof(axiosConf) !== 'object'){
            throw new Error('axiosConf not an object');
        }
        this._axiosClient = axios.create(axiosConf);
    }

    async get(url, queryStringParams){
        const response = await this._call('get', url, {
            params: {
                ...queryStringParams
            }
        });
        return response.data;
    }

    async post(url, body){
        const response = await this._call('post', url, body);
        return Promise.resolve(response.data);
    }

    async put(url, body){
        const response = await this._call('put', url, body);
        return Promise.resolve(response.data);
    }

    async patch(url, body){
        const response = await this._call('patch', url, body);
        return Promise.resolve(response.data);
    }

    async delete(url){
        const response = await this._call('delete', url);
        return Promise.resolve(response.data);
    }

    async _call(method, url, body){
        if(typeof(method) === undefined || typeof(method) !== 'string'){
            throw new Error(`method must be a string`);
        }
        if(typeof(url) === undefined || typeof(url) !== 'string' || url.length < 1){
            throw new Error(`url must be a string`);
        }
        const callBody = body || {};        
        return await this._axiosClient[method](url, callBody);
    }
}

/**
 * Default instance to use containing basic settings.
 */
const httpClient = new HTTPClient({
    baseURL: `${window.location.origin}/api/v1/`,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default httpClient;