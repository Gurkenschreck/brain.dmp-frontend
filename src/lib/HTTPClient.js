import axios from 'axios';

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

    get(url, queryStringParams){
        return this._axiosClient.get(url, {
            params: {
                ...queryStringParams
            }
        });
    }

    post(url, body){
        return this._axiosClient.post(url, body);
    }

    put(url, body){
        return this._axiosClient.put(url, body);
    }

    patch(url, body){
        return this._axiosClient.patch(url, body);
    }

    delete(url){
        return this._axiosClient.delete(url);
    }
}

const httpClient = new HTTPClient({
    baseURL: `${window.location.origin}/api/v1/`,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default httpClient;