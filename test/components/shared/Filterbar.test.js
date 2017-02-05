import Filterbar from './../../../src/components/shared/Filterbar';

import ToggleButton from './../../../src/components/shared/ToggleButton';

describe('<Filterbar /> component', () => {

    let enzymeWrapper;

    beforeEach(() => {
        enzymeWrapper = shallow(<Filterbar />);
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.filterbar').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <ToggleButton id="mineFilterBtn"
                title="Mine" onToggle={() => {}} />
        );
    })
});