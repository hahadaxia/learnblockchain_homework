// const { assert } = require("console");

// const { isTypedArray } = require("util/types");

const Counter = artifacts.require("Counter");

contract("Counter", accounts => {
 var counterInstance;
 it("Counter",function() {
   return Counter.deployed().then(function(instance){
     counterInstance = instance;
     return counterInstance.count();
   }).then(function(){
      return counterInstance.count();
   }).then(function(count){
    //  assert.equal(count,2);
     console.log(count)
   });
 });
});