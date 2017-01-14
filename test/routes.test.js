import Routes from './../src/routes';

describe('Routes', () => {
    it('contains all routes', () => {
        const enzymeWrapper = shallow(<Routes />);
        expect(enzymeWrapper.find('Router').length).toEqual(1);
        expect(enzymeWrapper.find('Route').length).toEqual(12);
    })
});