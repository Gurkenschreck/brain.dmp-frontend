import Dumpcart from './../../../src/components/Dumps/Dumpcart';

import serverMockData from './../../../src/server-mockdata';

describe('<Dumpcart /> component', () => {

    let enzymeWrapper;

    beforeEach(() => {
        enzymeWrapper = shallow(<Dumpcart dump={serverMockData.DUMPS[0]} />);
    });

    it('should display correctly', () => {
        const dump0 = serverMockData.DUMPS[0];
        expect(enzymeWrapper.find('div').exists()).toBeTruthy();
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                {dump0.title}
            </p>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                {dump0.authorName}
            </p>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                {dump0.createdOn}
            </p>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                {dump0.content}
            </p>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                {dump0.medianRating} {dump0.ratingCount}
            </p>
        );
        expect(enzymeWrapper.getNode()).toIncludeJSX(
            <p>
                Tags: {dump0.tags.map((tag) => { return tag; })}
            </p>
        );
    })
});