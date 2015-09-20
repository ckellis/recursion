// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function (obj) {
  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined || typeof obj[i] === 'function') {
        continue;
      }
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }
  if (typeof(obj) === 'object' && obj) {
      var strArr = [];
      var keyArray = Object.keys(obj);
        for(var i = 0; i < keyArray.length; i++) {
            var currentKey = keyArray[i];
            var currentVal = obj[keyArray[i]];
            var keyVal;
            if (currentVal === undefined || typeof currentVal === 'function') {
              continue;
            } else if(typeof(currentVal) === 'string') {
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
    return obj === null ? 'null' :
           obj === false ? 'false':
           typeof(obj) === 'string' ? '"'+obj+'"' :
           !obj ? obj : obj.toString();
  }
};

