import Button from './../../../src/components/shared/Button';


describe('<Button /> component', () => {

    let enzymeWrapper;

    beforeEach(() => {
        enzymeWrapper = shallow(<Button />);
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.button').exists()).toBeTruthy();
        expect(enzymeWrapper.find('button').exists()).toBeTruthy();
    })
});