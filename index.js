// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
 const newArray = drivers.slice(0,2)
   return newArray
}
const returnLastTwoDrivers = function (drivers) {
    const newArray = drivers.slice(2)
      return newArray
   }
   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    selectingDrivers

    function createFareMultiplier(num) {
        return function(fare) {
            return fare * num;
        }
    }
const fareDoubler= createFareMultiplier(2)
 fareDoubler   
 const fareTripler= createFareMultiplier(3)
 fareTripler  


 function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}