import {HTTPClient} from './../../src/lib/HTTPClient';

describe('HTTPClient class', () => {
    let client;
    const BASE_URI = 'https://brain.dmp/api/v1/';
    deepFreeze(BASE_URI);

    beforeEach(() => {
        client = new HTTPClient({
            baseURL: BASE_URI,
            timeout: 1000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        nock.cleanAll();
    });

    it('constructor should check for config type', () => {
        expect(() => {new HTTPClient()}).toThrow('axiosConf not an object');
        expect(() => {new HTTPClient('abc')}).toThrow('axiosConf not an object');
        expect(() => {new HTTPClient(123)}).toThrow('axiosConf not an object');
        expect(() => {new HTTPClient({})}).toNotThrow('axiosConf not an object');
    });

    it('should perform simple GET correctly', async () => {
        const response = "You are good!";
        nock(BASE_URI)
            .get('/smth').reply(200, response);

        const actualResponse = await client.get('/smth');
        expect(actualResponse).toEqual(response);
    });

    it('should perform GET with parameters correctly', async () => {
        const request = {
            "name": "Marx",
            "pro": "cool"
        }
        const response = {
            "name": "Karl Marx",
            "title": "Our Lord"
        };
        
        nock(BASE_URI)
            .get('/smth?name=Marx&pro=cool').reply(200, response);

        const actualResponse = await client.get('/smth', request);
        expect(actualResponse).toEqual(response);
    });
});