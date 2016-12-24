import NotFound from './../../../src/components/status/NotFound';

describe('<NotFound /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<NotFound />);
        expect(
            enzymeWrapper.text()
        ).toEqual('404 NOT FOUND');
    })
})