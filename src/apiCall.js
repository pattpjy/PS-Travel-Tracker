const fetchUserData = (url, object) => {
    return fetch(url, object).then((response) => {
      if (!response.ok) {
        throw new Error("Unable To Get Your Data. Try Later.");
      }
      return response.json();
    });
  };

// get request
 const fetchUser = (inputID) => {
  return fetchUserData("http://localhost:3001/api/v1/travelers/" + inputID)
 }

  const fetchAll = () => {
    return Promise.all([
      fetchUserData("http://localhost:3001/api/v1/travelers"),
      fetchUserData("http://localhost:3001/api/v1/trips"),
      fetchUserData("http://localhost:3001/api/v1/destinations"),
      
    ]);
  };
  
// post request


const postNewTrip = (newTrip) => {
  return fetch("http://localhost:3001/api/v1/trips", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTrip)
  })
  .then((response) => {
    if (!response.ok) { 
      throw Error('Request Failed')
    } 
    return response.json();
  })
}
  export { fetchAll , postNewTrip, fetchUser};
   