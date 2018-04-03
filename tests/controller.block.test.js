const should = require('should');
const request = require('supertest');
//var app = require('../app');
var app = 'http://localhost:3000';

describe('controller/v1/block/get.js test', () => {

    before((done) => {
        done();
    });

    describe('#getBlock api', () => {
        it('should be getBlock success', (done) => {
            request(app)
                .get('/v1/test/4f1Sp/UD55JX5+kQCveUCpyenaPwqmpC')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    let data = response.body;
                    data.state.should.be.equal(0);
                    data.result.should.be.not.empty();
                    data.result.address.should.have.property('items');
                    data.result.transaction.should.have.property('items');
                    done();
                }).catch(err => {
                    done(err);
                })


        });
    });


    after((done) => {
        done();
    });
})