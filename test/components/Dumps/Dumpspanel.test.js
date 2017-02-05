import {Dumpspanel} from './../../../src/components/Dumps/Dumpspanel';

import Filterbar from './../../../src/components/shared/Filterbar';

describe('<Dumpspanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Dumpspanel />);

        expect(enzymeWrapper.find('.dumpspanel').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Filterbar />
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <div className="dumpspanel__main">
                Some dumps
            </div>
        );
    })
});