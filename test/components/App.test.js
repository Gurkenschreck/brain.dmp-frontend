import App from './../../src/components/App';

describe('<App /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = render(<App />);
        expect(
            enzymeWrapper.find('header').text()
        ).toEqual('StartDumpsQuestionsPostersAccount');
        expect(
            enzymeWrapper.find('main').text()
        ).toEqual('Hellooo');
        expect(
            enzymeWrapper.find('footer').text()
        ).toEqual('Some disclaimer/info footer with links');
    })
});