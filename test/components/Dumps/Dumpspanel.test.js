import {Dumpspanel} from './../../../src/components/Dumps/Dumpspanel';

import Filterbar from './../../../src/components/shared/Filterbar';

describe('<Dumpspanel /> component', () => {

    let enzymeWrapper;

    const filterSettings = {
        subscribedFilterBtn: true,
        searchText: '',
        publicFilterBtn: false,
        mineFilterBtn: true
    }
    deepFreeze(filterSettings);

    beforeEach(() => {
        enzymeWrapper = shallow(<Dumpspanel />);
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.dumpspanel').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <Filterbar filterSettings={filterSettings}
                        onFilterChange={() => {}}>
                        b
            </Filterbar>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <div className="dumpspanel__main">
                Some dumps
            </div>
        );
    })
});