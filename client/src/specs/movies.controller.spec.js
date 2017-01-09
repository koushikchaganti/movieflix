/**
 * Created by Koushik on 1/3/2017.
 */


(function () {

    describe('Movie Controller',function () {
        var movieCtrl;

        beforeEach(module('movieflix'));

        beforeEach(inject(function (_$controller_) {
            movieCtrl = _$controller_('MovieController');
        }));

        describe('Initialization',function () {
            it('Loads Movie Controller',function () {
                expect(movieCtrl).toBeDefined();
            });
        });
    });

})();
