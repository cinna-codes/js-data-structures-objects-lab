// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver}
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    // deletes `key` from a clone of driver and returns the new driver (it is non-destructive):
    // does not modify the original driver (it is non-destructive):
    const newDriver = {...driver}
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    // returns driver without the delete key/value pair:
    // modifies the original driver:
    delete driver[key]
    return driver
}

