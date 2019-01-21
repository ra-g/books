const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('Testing the routes', function(){

    it('should return OK status for /', function() {
        return request(app)
            .get('/')
            .then(function(response){
                assert.equal(response.status, 200)
            })
    });
    
    it('should return message on rendering /search', function(){
        return request(app)
            .get('/search')
            .then(function(response){
                expect(response.text).to.contain('Search for books');
            })
    });
});