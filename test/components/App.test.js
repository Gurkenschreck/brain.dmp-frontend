import App from './../../src/components/App';

describe('<App /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = render(<App />);
        expect(
            enzymeWrapper.find('header').text()
        ).toEqual('StartDumpsQuestionsPostersAccount');
        expect(
            enzymeWrapper.find('main').text()
        ).toEqual('Main Content');
        expect(
            enzymeWrapper.find('footer').text()
        ).toEqual('Some disclaimer/info footer with links');
        expect(enzymeWrapper.find('#app').length).toEqual(1);
        expect(enzymeWrapper.find('.app').length).toEqual(1);
        expect(enzymeWrapper.find('.app__main').length).toEqual(1);
        expect(enzymeWrapper.find('.app__footer').length).toEqual(1);
    })
});