import ToggleButton from './../../../src/components/shared/ToggleButton';

describe('<ToggleButton /> component', () => {

    let enzymeWrapper;

    let onToggleButtonSpy;

    beforeEach(() => {
        enzymeWrapper = shallow(
            <ToggleButton id="coolBtn"
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