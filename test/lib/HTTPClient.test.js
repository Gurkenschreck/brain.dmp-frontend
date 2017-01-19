import {HTTPClient} from './../../src/lib/HTTPClient';



describe.only('HTTPClient class', () => {
    let client;

    beforeEach(() => {
        client = new HTTPClient({
            baseURL: 'https://brain.dmp/api/v1/',
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

     it('should perform GET correctly', () => {
        nock('https://brain.dmp/api/v1')
            .get('/smth').reply('You are good!');

        const getPromise = client.get('/smth');

        console.log(getPromise.state);
    });
});