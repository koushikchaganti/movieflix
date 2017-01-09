/**
 * Created by Koushik on 1/3/2017.
 */
(function(){

    describe('MoviesService', function(){
        beforeEach(module('movieflix'));

        var movieservice, httpBackend, config;
        beforeEach(inject(function(_MovieService_,_$httpBackend_,_CONFIG_){
            movieservice = _MovieService_;
            httpBackend = _$httpBackend_;
            config = _CONFIG_;
        }));

        describe('loads service' ,function(){
            it('loads api call',function(){
                httpBackend.when('GET', config.API_HOST+'/titles/type/movie')
                    .respond({ trolled: 'true' });

            });
            $httpBackend.flush();
        });


    })

})();