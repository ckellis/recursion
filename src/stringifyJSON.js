// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var obj1 = {red:true, height:5, color:"red"};

var stringifyJSON = function(obj){

    if(typeof(obj) === 'object' && obj && !Array.isArray(obj)){
      var strArr = [];
      var keyArray = Object.keys(obj);
        for(var i=0;i<keyArray.length;i++){
            var currentKey = keyArray[i];
            var currentVal = obj[keyArray[i]];
            var keyVal;
            if(typeof(currentVal) === 'string'){
              keyVal = '"'+currentKey+'":'+'"'+currentVal+'"';
            } else if(!currentVal){
                  keyVal = '"'+currentKey+'":'+currentVal;
            } else if(typeof(currentVal) === 'object'){
                keyVal = '"'+currentKey+'":'+ stringifyJSON(currentVal);
            } else {
                keyVal = '"'+currentKey+'":'+currentVal;
            }
            strArr.push(keyVal);
        }
    return "{" + strArr.join(",") + "}";
  } else {
    return Array.isArray(obj) ? obj :
           obj === null ? 'null' :
           obj === false ? 'false':
           typeof(obj) === 'string' ? '"'+obj+'"' :
           !obj ? obj : obj.toString();
  }
};
var arr = [];
console.log(stringifyJSON(obj1));
console.log(JSON.stringify(obj1));
console.log(stringifyJSON(arr));
console.log(JSON.stringify(arr));

/*
  _.each(keyArray, function(x){
    return x = x.toString();
  });
*/
