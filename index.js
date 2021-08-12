const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function () {
    const fareMultiplier = x => (x**2)
    return fareMultiplier;
}

const fareDoubler = x => (x*2)

const fareTripler = x => (x*3)

const selectDifferentDrivers = function (driversArr, selection) {
    return selection(driversArr)
}