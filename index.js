const driver = {};

function updateDriverWithKeyAndValue(obj, ky, value) {
  const new_obj = { ...obj };
  new_obj[ky] = value;
  return new_obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] =  value;
  return driver;
}

function deleteFromDriverByKey(obj, key) {
  const new_driver = { ...obj };
  delete new_driver[key];
  return new_driver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}