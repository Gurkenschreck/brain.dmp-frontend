import Newspanel from './../../../src/components/Home/Newspanel';

describe('<Newspanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Newspanel />);

        expect(enzymeWrapper.find('div').text()).toEqual('Some news');
    })
});