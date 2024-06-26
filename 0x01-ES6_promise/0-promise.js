function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (like an API call)
    setTimeout(() => {
      // Resolve the promise with some data
      resolve("API response");
    }, 1000);
  });
}

export default getResponseFromAPI;
