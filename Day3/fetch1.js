const fetchPromise = fetch("https://jsonplaceholder.typicode.com/photos");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  const titles = people.map(person => person.title).join("\n");
  console.log(titles);
});