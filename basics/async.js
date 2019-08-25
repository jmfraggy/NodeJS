// Async Code & Promises
// Asynchronous code - It doesn't finish immediately
// Execute your async code once the sync is done.

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}; 
 
setTimeout(() => {
      console.log('Timer is done!');
      fetchData()
      .then(text => {
          console.log(text);
          return fetchData(); 
      })
      .then(text2 => {
          console.log(text2);
      });
}, 2000); // Timer of 2 sec

// JS and Node.js does not block your code execution until that is done

console.log('Hello'); // Sync code