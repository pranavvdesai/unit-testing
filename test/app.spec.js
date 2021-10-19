const Myclass = require('../src/app');
var myObj = new Myclass();
const expect = require('chai').expect;
var sinon = require('sinon');
const chaiaspromised = require('chai-as-promised');
// chai.use(chaiaspromised);

describe('Test Suite',()=>{
    after(function(){
        console.log('after');
    })
    before(function(){
        console.log('before');
    })
    afterEach(function(){
        console.log('after each test case');
    })
    beforeEach(function(){
        sinon.restore();
        console.log('before each test case');
    })
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
    // hooks before each, restores spy on 'add' method
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
    it("mock the hello func",()=>{

        // hello shld be ignored and a mock method is called
        var mock = sinon.mock(myObj);
        var expectation = mock.expects('hello');
        expectation.exactly(1)
         // prints hello
        myObj.anotherfunc(10,20)

        mock.verify();

    })

})
describe.skip('test suite for stub',()=>{
    it('stub the add method',()=>{
        var stub = sinon.stub(myObj,'add');
        stub.withArgs(4,6).onFirstCall().returns(100000).onSecondCall().returns(200);
        expect(myObj.anotherfunc(4,6)).to.equal(100000);
        expect(myObj.anotherfunc(4,6)).to.equal(200);

  })
})


describe.skip('test suite for promise',()=>{
    it('test the promise',function(done){
        this.timeout(0);
        myObj.testPromise()
        .then((res)=>{
            expect(res).to.equal(10);
            // expect(false).to.be.true;
        }).then(done,done)
    })
})


describe.skip('test suite for cchai-as-promise',()=>{
    it('test the promise',function(){
        this.timeout(0);
        return expect(myObj.testPromise()).to.eventually.equal(10);
    })
})
