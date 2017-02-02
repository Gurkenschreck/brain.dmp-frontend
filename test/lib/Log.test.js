import Log from './../../src/lib/Log';

describe('Log class', () => {

    let loggerMock = {
        info: () => {},
        warn: () => {},
        error: () => {}
    };
    let infoSpy, warnSpy, errorSpy;

    beforeEach(() => {
        Log.reset();
        infoSpy = expect.spyOn(loggerMock, 'info');
        warnSpy = expect.spyOn(loggerMock, 'warn');
        errorSpy = expect.spyOn(loggerMock, 'error');
        Log.logger = loggerMock;
    });

    afterEach(() => {
        expect.restoreSpies();
    });

    it('should apply basic function calls', () => {
        Log.info('Sum ting wong.');
        Log.warn('We tu low!');
        Log.error('Crash bang ow!')
        expect(infoSpy).toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalled();
    });

    it('should apply extended xIf function calls', () => {
        Log.infoIf(true, 'Sum ting wong.');
        Log.infoIf(false, 'Sum ting wong.');
        Log.warnIf(true, 'We tu low!');
        Log.warnIf(false, 'We tu low!');
        Log.errorIf(true, 'Crash bang ow!')
        Log.errorIf(false, 'Crash bang ow!')
        expect(infoSpy).toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalled();
    });

});