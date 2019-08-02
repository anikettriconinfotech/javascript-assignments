/*var list = document.getElementById('btn');
list.addEventListener('click',getUserList);

function getPhotos()
{
    var url = "https://jsonplaceholder.typicode.com/photos";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200)
        {
            viewPhotos(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
}

function viewPhotos(response) {
    for (var i = 0; i < response.length; i++) {
        var user = response[i];
       
        var photoElement = document.createElement('div');
        photoElement.className = 'user';
       
        var albumId = document.createElement('p');
        albumId.innerHTML = user.albumId;
       
        var id = document.createElement('p');
        id.innerHTML = user.id;
       
        var title = document.createElement('p');
        title.innerHTML = user.title;
       
        var url = document.createElement('img');
        url.src = user.url;
       
        var thumbnailUrl = document.createElement('img');
        thumbnailUrl.src = user.thumbnailUrl;

        photoElement.appendChild(albumId);
        photoElement.appendChild(id);
        photoElement.appendChild(title);
        photoElement.appendChild(url);
        photoElement.appendChild(thumbnailUrl);

        document.getElementById('user-photos').appendChild(photoElement);
    }

}
*/

fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
   ul = document.getElementById('photos');
   for(var i =0; i<data.length ; i++)
   {
      li = document.createElement('span');
      img = document.createElement('img');
      img.setAttribute('src', data[i].thumbnailUrl);
      li.appendChild(img);
      ul.appendChild(li)
   }

});
   


