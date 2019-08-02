document.getElementById('btn').addEventListener('click',getPhotos);

function getPhotos(){
fetch('https://jsonplaceholder.typicode.com/photos')
.then((res) => res.json())
.then((data1)=> {
let output = '<h1>Pictures</h1>';
data1.forEach(function(photos){
output+=`<h3>Title : ${photos.title}</h3>
<img src="${photos.url}" >`;
});
document.getElementById('output').innerHTML = output;
})

}