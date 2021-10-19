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
    var result = this.add(arg1,arg2);
    return result;
  }


callthecallback(callback){
  callback();
}

testPromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1);
    },2000);
  }).then((result)=>{
    return result*2
  });
}

}

module.exports=Myclass;