// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports={
//     add:add,
//     sub:subtract
// }

class Myclass{
  constructor(){
    console.log("Myclass constructor");
  }

  hello(){
    console.log("Hello");
  }

  add(arg1,arg2){
    var result=arg1+arg2;
    return result;
  }

  anotherfunc(arg1,arg2){
    this.hello();
    this.add(arg1,arg2);
  }


callthecallback(callback){
  callback();
}

}

module.exports=Myclass;