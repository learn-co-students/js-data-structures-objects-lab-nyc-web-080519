// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver,key) {
    const n_o = Object.assign({}, driver);
    delete n_o[key];
    return n_o;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}