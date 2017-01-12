import App from './../../src/components/App';

describe('<App /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<App />);
        expect(
            enzymeWrapper.find('div').text()
        ).toEqual('Hellooo');
    })
});