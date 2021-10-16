const Myclass = require('../src/app');
var myObj = new Myclass();
const expect = require('chai').expect;
var sinon = require('sinon');

describe('Test Suite',()=>{
    it('Test the add method',()=>{
        expect(myObj.add(2,3)).to.equal(5);
    })
    it("spy the add method",()=>{
        var spy = sinon.spy(myObj,'add');
        var arg1 = 4, arg2 = 6;
        myObj.anotherfunc(arg1,arg2);
        // sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(4,6)).to.be.true;
    })
    it("callback spy",()=>{
        var callback = sinon.spy();
        myObj.callthecallback(callback);
        expect(callback.calledOnce).to.be.true;
    
    })
})