// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var traverse = function(node){
    for(var i = 0; i < node.classList.length; i++){
        if(node.classList[i] === className){
          result.push(node);
          break;
        }
      }
    for(var j = 0; j < node.children.length; j++){
        traverse(node.children[j]);
    }
  }
  traverse(document.body);
  return result;
};

