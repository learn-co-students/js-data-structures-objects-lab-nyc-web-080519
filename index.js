// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v});
};

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
};

//intentionally playing around with normal functions and arrow functions for syntax practice
const deleteFromDriverByKey = (obj, k) => {
  const newObj = { ...obj };
  //could also do const newObj = Object.assign({}, obj);
  delete newObj[k];
  return newObj;
};

const destructivelyDeleteFromDriverByKey = (obj, k) => {
  delete obj[k];
  return obj;
};