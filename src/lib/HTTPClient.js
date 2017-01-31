import axios from 'axios';

/**
 * The HTTPClient is an utility class to make the HTTP calls
 * to the API endpoint. It is a wrapper around 'axios' and provides
 * several helper functions.
 */
export class HTTPClient {
    get axiosClient() {
        return this._axiosClient;
    }

    constructor(axiosConf){
        if(!axiosConf || typeof(axiosConf) !== 'object'){
            throw new Error('axiosConf not an object');
        }
        this._axiosClient = axios.create(
            axiosConf
        );
    }

    async get(url, queryStringParams){
        return this._axiosClient.get(url, {
            params: {
                ...queryStringParams
            }
        });
    }

    async post(url, body){
        const callBody = body || {};
        return this._axiosClient.post(url, callBody);
    }

    async put(url, body){
        const callBody = body || {};        
        return this._axiosClient.put(url, callBody);
    }

    async patch(url, body){
        const callBody = body || {};        
        return this._axiosClient.patch(url, callBody);
    }

    async delete(url){
        return this._axiosClient.delete(url);
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