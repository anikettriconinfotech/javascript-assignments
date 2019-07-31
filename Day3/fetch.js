const fetchPromise = fetch("https://jsonplaceholder.typicode.com/photos");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});