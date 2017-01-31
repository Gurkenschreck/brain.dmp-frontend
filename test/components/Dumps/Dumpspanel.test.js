import {Dumpspanel} from './../../../src/components/Dumps/Dumpspanel';

describe('<Dumpspanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Dumpspanel />);

        expect(enzymeWrapper.find('div').text()).toEqual('Some dumps');
    })
});