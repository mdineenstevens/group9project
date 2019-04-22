const { ObjectId } = require('mongodb');

function CHKstring(val){
  if(typeof val !== "string"){
    throw `the input should be a string`
  }
}

function checkObjectId(id) {
  if (!(id instanceof ObjectId)) {
    try {
      if (typeof id === 'undefined') throw 'Specifed Id is undefined';
      id = ObjectId(id);
    } catch (e) {
      throw 'Unable to parse ObjectId';
    }
  }
  return id;
}

function CHKarray(val){
  if(Array.isArray(val) === false){
    throw `Hi, Chenyu(routes). Make sure you modify the body to the required format.`;
  }else{
    if(val.length === 0){
      throw `There should be at least one option.`
    }
    return val;
  }
}

function CHKStrInfo(val){
  if(val === null || val === undefined){
    throw `Please make sure your option is not empty.`
  }else{
    let str = val;
    if(str.replace(/\s/g, '').length === 0){
      throw `Please make sure your option is valid.`;
    }else{
      return val;
    }
  }
}

function RandomN(arr, num){
  // Math.floor(Math.random() * (arr.length) );
  let cnt = 0;
  let index = [];
  let NewArr = [];
  while(cnt < num){
    // console.log(cnt, num)
    let temp = Math.floor(Math.random() * (arr.length) );
    if(index.includes(temp) === false){
      index.push(temp);
      NewArr.push(arr[temp]);
      cnt = cnt+1;
      //console.log(index, NewArr, temp, cnt)
    }
  }
  return NewArr;
}

// RandomN([3,5,2,6,8,4,10], 3)

module.exports = {
    CHKstring,
    checkObjectId,
    CHKarray,
    CHKStrInfo,
    RandomN
  }