import SearchBox from './../../../src/components/shared/SearchBox';
import Button from './../../../src/components/shared/Button';

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
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Button  onClick={() => {}}>
                Search
            </Button>
        );
        expect(enzymeWrapper.find('.searchBox').exists()).toBeTruthy();
        expect(enzymeWrapper.find('.searchBox__input').exists()).toBeTruthy();
    })
});