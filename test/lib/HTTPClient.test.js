import {HTTPClient} from './../../src/lib/HTTPClient';

describe('HTTPClient class', () => {
    let client;

    const BASE_URI = 'https://brain.dmp/api/v1/';
    deepFreeze(BASE_URI);
    const mockResponseText = "You are good!";
    const mockResponseObj = {
        "name": "Karl Marx",
        "title": "Our Lord"
    };
    const mockRequestObj = {
        "name": "Marx",
        "pro": "cool"
    }

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

    it('should fail to make call when url is not a string', async () => {
        nock(BASE_URI)
            .get('/redrum').reply(200, 'REDRUM');
        // Call function to throw an error. If not expect the worst!
        try{
            await client._call('get');
            expect(true).toBeFalsy();                                    
        }catch(e){ expect(e.message).toEqual('url must be a string'); }
        try{
            await client._call('get', 1);
            expect(true).toBeFalsy();                        
        }catch(e){ expect(e.message).toEqual('url must be a string'); }
        try{
            await client._call('get', {});
            expect(true).toBeFalsy();                        
        }catch(e){ expect(e.message).toEqual('url must be a string'); }
        try{
            await client._call('get', []);
            expect(true).toBeFalsy();                        
        }catch(e){ expect(e.message).toEqual('url must be a string'); }
        try{
            await client._call("get", '');
            expect(true).toBeFalsy();                        
        }catch(e){ expect(e.message).toEqual('url must be a string'); }
        try{
            await client._call("get", '/redrum');
        }catch(e){ expect(e.message).toNotEqual('url must be a string'); }
    });

    it('should perform simple GET correctly', async () => {
        nock(BASE_URI)
            .get('/smth').reply(200, mockResponseText);

        const actualResponse = await client.get('/smth');
        expect(actualResponse).toEqual(mockResponseText);
    });

    it('should perform GET with parameters correctly', async () => {
        const request = {
            "name": "Marx",
            "pro": "cool"
        }
        
        nock(BASE_URI)
            .get('/smth?name=Marx&pro=cool').reply(200, mockResponseObj);

        const actualResponse = await client.get('/smth', request);
        expect(actualResponse).toEqual(mockResponseObj);
    });

    it('should perform simple POST correctly', async () => {
        nock(BASE_URI)
            .post('/smth').reply(200, mockResponseText);

        const actualResponse = await client.post('/smth');
        expect(actualResponse).toEqual(mockResponseText);
    });

    it('should perform POST with body correctly', async () => {
        
        nock(BASE_URI)
            .post('/smth', mockRequestObj).reply(200, mockResponseObj);

        const actualResponse = await client.post('/smth', mockRequestObj);
        expect(actualResponse).toEqual(mockResponseObj);
    });

    it('should perform simple PUT correctly', async () => {
        nock(BASE_URI)
            .put('/smth').reply(200, mockResponseText);

        const actualResponse = await client.put('/smth');
        expect(actualResponse).toEqual(mockResponseText);
    });

    it('should perform PUT with body correctly', async () => {
        nock(BASE_URI)
            .put('/smth', mockRequestObj).reply(200, mockResponseObj);

        const actualResponse = await client.put('/smth', mockRequestObj);
        expect(actualResponse).toEqual(mockResponseObj);
    });

    it('should perform simple PATCH correctly', async () => {
        nock(BASE_URI)
            .patch('/smth').reply(200, mockResponseText);

        const actualResponse = await client.patch('/smth');
        expect(actualResponse).toEqual(mockResponseText);
    });

    it('should perform PATCH with body correctly', async () => {
        nock(BASE_URI)
            .patch('/smth', mockRequestObj).reply(200, mockResponseObj);

        const actualResponse = await client.patch('/smth', mockRequestObj);
        expect(actualResponse).toEqual(mockResponseObj);
    });

    it('should perform simple DELETE correctly', async () => {
        nock(BASE_URI)
            .delete('/smth').reply(201, mockResponseText);

        const actualResponse = await client.delete('/smth');
        expect(actualResponse).toEqual(mockResponseText);
    });
});