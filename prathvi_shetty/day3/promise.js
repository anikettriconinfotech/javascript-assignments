fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
   ul = document.getElementById('lists');
   for(var i =0; i<data.length ; i++)
   {
      li = document.createElement('span');
      img = document.createElement('img');
      img.setAttribute('src', data[i].thumbnailUrl);
      li.appendChild(img);
      ul.appendChild(li)
   }

});
   

   
    