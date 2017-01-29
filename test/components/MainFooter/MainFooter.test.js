import MainFooter from './../../../src/components/MainFooter/MainFooter';

describe('<MainFooter /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<MainFooter />);

        expect(enzymeWrapper.find('footer').text()).toEqual('Footer content (links etc)');
    })
});