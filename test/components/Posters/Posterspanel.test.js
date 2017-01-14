import Posterspanel from './../../../src/components/Posters/Posterspanel';

describe('<Posterspanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Posterspanel />);

        expect(enzymeWrapper.find('div').text()).toEqual('Some posters');
    })
});