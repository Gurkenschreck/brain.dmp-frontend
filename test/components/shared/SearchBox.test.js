import SearchBox from './../../../src/components/shared/SearchBox';

describe('<SearchBox /> component', () => {

    let enzymeWrapper;

    beforeEach(() => {
        enzymeWrapper = shallow(
            <SearchBox />
        );
    });

    afterEach(() => {
        expect.restoreSpies();
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('input').exists()).toBeTruthy();
        expect(enzymeWrapper.find('button').exists()).toBeTruthy();
        expect(enzymeWrapper.find('.searchBox').exists()).toBeTruthy();
        expect(enzymeWrapper.find('.searchBox__input').exists()).toBeTruthy();
        expect(enzymeWrapper.find('.searchBox__button').exists()).toBeTruthy();
    })
});