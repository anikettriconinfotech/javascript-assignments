
const searchUrl='https://jsonplaceholder.typicode.com/photos';

$(document).ready(() => {
 $("#searchButton").click(() =>{ 
    fetch(searchUrl)
      .then((data) => data.json())
      .then((items) => {
          console.log(items.length);
          items.forEach((item) => {
            $("#box").append('<span><img src='+item.url+'  style="width: 20px; height: 20px;"></span>');
          });
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
   });
});