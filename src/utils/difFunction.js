/**
 * Created by mapbar_front on 2018/1/7.
 */
export function getType(value) {
  if(arguments.length !== 1){
    throw new TypeError('参数必须仅仅一个!');
  }
  if(Object.prototype.toString.call(value) == '[object Object]'){
    return 'object';
  } else if(Object.prototype.toString.call(value) == '[object Array]'){
    return 'array';
  } else if(Object.prototype.toString.call(value) == '[object Number]'){
    return 'number';
  } else if(Object.prototype.toString.call(value) == '[object String]'){
    return 'string';
  } else if(Object.prototype.toString.call(value) == '[object Function]'){
    return 'function';
  } else if(Object.prototype.toString.call(value) == '[object Boolean]'){
    return 'boolean';
  } else if(Object.prototype.toString.call(value) == '[object Null]'){
    return 'null';
  } else if(Object.prototype.toString.call(value) == '[object Undefined]'){
    return 'undefined';
  } else {
    throw new Error('这是一个未知的类型!');
  }
}

export function isEqual(value1, value2) {
  var isequal = true;
  if (getType(value1) !== getType(value2)){
    return false
  }
  if(typeof value1 != 'object'){
    return value1 === value2
  } else {

    for(var i in value1) {
      if(!arguments.callee(value1[i], value2[i])){
        isequal = false
      }
    }
    for(var j in value2){
      if (!arguments.callee(value1[j], value2[j])){
        isequal = false
      }
    }
    return isequal;
  }
}

export default {
  getType,
  isEqual
}
