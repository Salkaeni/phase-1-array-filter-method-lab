// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names begin with the provided string
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
      driver.startsWith(letters)
    );
  }
  
  // Function to find driver objects where the name property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name === name
    );
  }
  
  // Example usage:
  const drivers = ['Sally', 'Annette', 'Sarah', 'Annie'];
  const driverObjects = [
    { name: 'Sally', hometown: 'New York' },
    { name: 'Annette', hometown: 'Chicago' },
    { name: 'Sarah', hometown: 'Los Angeles' },
    { name: 'Annie', hometown: 'San Francisco' }
  ];
  
  console.log(findMatching(drivers, 'sally')); // ['Sally']
  console.log(fuzzyMatch(drivers, 'Sa')); // ['Sally', 'Sarah']
  console.log(matchName(driverObjects, 'Annette')); // [{ name: 'Annette', hometown: 'Chicago' }]