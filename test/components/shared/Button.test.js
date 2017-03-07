import Button from './../../../src/components/shared/Button';


describe('<Button /> component', () => {

    let enzymeWrapper;
    let props;

    beforeEach(() => {
        props = {
            onClick: expect.createSpy()
        };
        enzymeWrapper = shallow(<Button {...props}/>);
    });

    afterEach(() => {
        expect.restoreSpies();
    });

    it('should display correctly', () => {
        expect(enzymeWrapper.find('.button').exists()).toBeTruthy();
        expect(enzymeWrapper.find('button').exists()).toBeTruthy();
    });

    it('should call callback function on click', () => {
        enzymeWrapper.find('button').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    })
});