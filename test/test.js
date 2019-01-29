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
    
    it('should return results for this query', function(){
        return request(app)
            .get('/books')
            .query({ search: 'africa' })
            .then(function(response){
                expect(response.text).to.contain('click here for more info...');
            })
    });
    
    it('should not return results for this query', function(){
        return request(app)
            .get('/books')
            .query({ search: 'sdfdgrthrthrtghewgrefwerf' })
            .then(function(response){
                expect(response.text).to.contain('No match for your query.');
            })
    });
    
    it('should return message for invalid query', function(){
        return request(app)
            .get('/books')
            .query({ search: '###' })
            .then(function(response){
                expect(response.text).to.contain('Invalid query.');
            })
    });
});