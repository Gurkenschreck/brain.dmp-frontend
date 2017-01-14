import Questionspanel from './../../../src/components/Questions/Questionspanel';

describe('<Questionspanel /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<Questionspanel />);

        expect(enzymeWrapper.find('div').text()).toEqual('Some questions');
    })
});