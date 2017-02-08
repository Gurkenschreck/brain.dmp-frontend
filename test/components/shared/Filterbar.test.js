import Filterbar from './../../../src/components/shared/Filterbar';

import ToggleButton from './../../../src/components/shared/ToggleButton';
import SearchBox from './../../../src/components/shared/SearchBox';

describe('<Filterbar /> component', () => {

    let enzymeWrapper;

    const filterSettings = {
        subscribedFilterBtn: true,
        searchText: '',
        publicFilterBtn: false,
        mineFilterBtn: true
    }
    deepFreeze(filterSettings);

    beforeEach(() => {
        enzymeWrapper = shallow(<Filterbar filterSettings={filterSettings} />);
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.filterbar').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <ToggleButton id="mineFilterBtn"
                title="Mine" onToggle={() => {}} isActive={true}/>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <ToggleButton id="subscribedFilterBtn"
                title="Subscribed" onToggle={() => {}} isActive={true} />
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <ToggleButton id="publicFilterBtn"
                title="Others" onToggle={() => {}} />
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <SearchBox onSearchClick={() => {}}
                        searchTextPlaceholder="Title, text, tags..." />
        )
    });

    // TODO add tests for changing filter states
});