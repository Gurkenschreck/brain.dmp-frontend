import SearchBox from './../../../src/components/shared/ToggleButton';

describe('<ToggleButton /> component', () => {

    let enzymeWrapper;

    let onToggleButtonSpy;

    beforeEach(() => {
        enzymeWrapper = shallow(
            <SearchBox id="coolBtn"
                    title="Yooo"
                    onToggle={() => {
                        
                    }} />
        );
    });

    afterEach(() => {
        expect.restoreSpies();
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.toggleButton').exists()).toBeTruthy();
    })
});