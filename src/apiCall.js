const fetchUserData = (url, object) => {
    return fetch(url, object).then((response) => {
      if (!response.ok) {
        throw new Error("Unable To Post Your Data. Try Later.");
      }
      return response.json();
    });
  };

// get request
  const fetchAll = () => {
    return Promise.all([
      fetchUserData("http://localhost:3001/api/v1/travelers"),
      fetchUserData("http://localhost:3001/api/v1/trips"),
      fetchUserData("http://localhost:3001/api/v1/destinations"),
      
    ]);
  };
  
// post request


const requestNewTrip = (newTrip) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTrip)
  })
  .then((response) => {
    if (response.ok) { 
     return response.json();
    }
    throw Error('Request Failed, missing input fields')
  })
}
  export { fetchAll };
   