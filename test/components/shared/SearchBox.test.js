import SearchBox from './../../../src/components/shared/SearchBox';
import Button from './../../../src/components/shared/Button';
import Textfield from './../../../src/components/shared/Textfield';

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
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Button  onClick={() => {}}>
                Search
            </Button>
        );
        expect(enzymeWrapper.find('.searchBox').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Textfield onChange={() => {}} 
                        value=''
                        customClass='searchBox__input'
                        placeholder='' />
        );
    })
});