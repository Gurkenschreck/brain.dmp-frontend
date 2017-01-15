import App from './../../src/components/App';

describe('<App /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = render(<App />);
        expect(
            enzymeWrapper.find('header').text()
        ).toEqual('StartDumpsQuestionsPostersAccount');
        expect(
            enzymeWrapper.find('main').length
        ).toEqual(1);
        expect(
            enzymeWrapper.find('footer').text()
        ).toEqual('Footer content (links etc)');
        expect(enzymeWrapper.find('#app').length).toEqual(1);
        expect(enzymeWrapper.find('.app').length).toEqual(1);
        expect(enzymeWrapper.find('.app__main').length).toEqual(1);
    })
});