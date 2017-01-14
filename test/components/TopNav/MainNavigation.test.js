import MainNavigation from './../../../src/components/TopNav/MainNavigation.js';
import { Link } from 'react-router';

describe('<MainNavigation /> component', () => {
    it('should display correctly', () => {
        const enzymeWrapper = shallow(<MainNavigation />);
        expect(enzymeWrapper.find('header').length).toEqual(1);
        expect(enzymeWrapper.find('li').length).toEqual(5);
        expect(enzymeWrapper.find('#mainheader').length).toEqual(1);
        expect(enzymeWrapper.find('.mainheader__menu').length).toEqual(1);
        expect(enzymeWrapper.find('.mainheader__item').length).toEqual(5);
    })
});