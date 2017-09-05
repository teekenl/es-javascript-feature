const assert = require('assert');

function getanimals(fetch,id){
    return fetch('http://api.animalfarmgame.com/animals/' + id)
        .then(response => response.json())
        .then(data => data.results[0])
        .catch(err => console.error(err));
}

// test 1
describe('getanimals', ()=> {
    it('call fetch with the correct url',() => {
        const fakeFetch = url => {
            assert(
                url ===
                'http://api.animalfarmgame.com/animals/123'
            );
            return new Promise(function(resolve) {
            });
        };
        getanimals(fakeFetch,123);
    });

    it('parse the response of fetch correctly', (done) => {
        const fakeFetch = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: 'fluffyskins',
                            type: 'robotdragon'
                        }
                    ]
                })
            });
        };

        getanimals(fakeFetch, 12345)
            .then(result => {
                assert(result.name === 'fluffyskins');
                done();
            });
        });
});