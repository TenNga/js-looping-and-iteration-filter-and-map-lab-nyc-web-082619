function driversWithRevenueOver(driver,revenue) {
 return driver.filter((driver))
}

function driverNamesWithRevenueOver(driver, revenue) {
  var result = []
 for(var i = 0; i < driver.length; i++) {
   if (driver.revenue > revenue)
      result.add(driver.name)
 }
 return result;
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