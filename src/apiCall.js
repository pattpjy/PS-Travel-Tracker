const fetchUserData = (url, object) => {
    return fetch(url, object).then((response) => {
      if (!response.ok) {
        throw new Error("Unable To Post Your Data. Try Later.");
      }
      return response.json();
    });
  };
  
  const fetchAll = () => {
    return Promise.all([
      fetchUserData("http://localhost:3001/api/v1/travelers"),
      fetchUserData("http://localhost:3001/api/v1/trips"),
      fetchUserData("http://localhost:3001/api/v1/destinations"),
      
    ]);
  };
  
  
  
  export { fetchAll };
  