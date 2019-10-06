function driversWithRevenueOver(drivers,revenue) {
 return drivers.filter((driver) => (driver.revenue > revenue))
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver.map((driver) => (driver.name))
}

function exactMatch(driver,attr) {
  var result = []
  attr_key = Object.keys(attr)[1]
 for(var i = 0; i < driver.length; i++) {
   keys = Object.keys(driver)
   
   if (keys[i] == attr_key)
      result.add(driver)
 }
 return result;
}