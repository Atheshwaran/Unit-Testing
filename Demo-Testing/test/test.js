var assert = require('assert'),
    should = require('should'),
    expect = require('chai').expect;


var answer;
var user = {
    name: 'Athesh',
    pets: ['dog', 'cat', 'rooster', 'rabbit']
};



var foo = 'bar',
    beverages = { tea: ['lemon', 'black', 'ginger'] };

describe('Test Suite 1', function() {
    describe('Scenario 1', function() {
        it('Array index check', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });

        it('Array property check', function() {
            user.should.have.property('name', 'Athesh');
            user.should.have.property('pets').with.lengthOf(4);
        });

        it('Foo is a string', function() {
            expect(foo).to.be.a('string');
        });
    });

    describe('Scenario 2', function() {
        it('Bar Equals', function() {
            expect(foo).to.equal('bar');

        });

        it('Length Equals', function() {
            expect(foo).to.have.lengthOf(3);

        });

        it('Property Equals', function() {
            expect(beverages).to.have.property('tea').with.lengthOf(3);
        });
    });


});


describe('Test Suite 2', function() {
    before(function() {
        answer = 43;
    });

    describe('Scenario 1', function() {

        it('Equals Check', function() {
            expect(answer).to.equal(43);
        })

        it('Expected Check', function() {
            expect(answer, 'topic [answer]').to.equal(43);
        })
    });
});