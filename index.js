function receivesAFunction(callback) {
    callback();
  }

function  returnsANamedFunction (){
    return function namedFunction(){
        console.log("do something")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "this does something as well";
    }
}