import Accountpanel from './../../../src/components/Account/Accountpanel';

describe('<Accountpanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Accountpanel />);

        expect(enzymeWrapper.find('div').text()).toEqual('Your account');
    })
});