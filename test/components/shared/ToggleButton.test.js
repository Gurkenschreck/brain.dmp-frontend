import ToggleButton from './../../../src/components/shared/ToggleButton';
import Button from './../../../src/components/shared/Button';

describe('<ToggleButton /> component', () => {

    let enzymeWrapper;

    let onToggleButtonSpy;

    beforeEach(() => {
        enzymeWrapper = shallow(
            <ToggleButton id="coolBtn"
                    title="Yooo"
                    onToggle={() => {}}
                    activeStyle={{'backgroundColor': 'black'}} />
        );
    });

    afterEach(() => {
        expect.restoreSpies();
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Button onClick={() => {}}
                    customStyle={{}}>
                Yooo
            </Button>
        );
    })
});