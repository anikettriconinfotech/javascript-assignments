(fetch( 'https://jsonplaceholder.typicode.com/photos' ).then( 
    function(response) {
    if (response.status !== 200) {
    alert('Looks like there was a problem. Status Code: ' + response.status)
    console.log('Looks like there was a problem. Status Code: ' + response.status)
    return;
  }

  // Examine the text in the response
  response.json().then( photos => {
    ul = document.getElementById( "photolist" )
    for( var i = 0; i < photos.length; i++ ){
        li = document.createElement( 'li' )
        img = document.createElement( 'img' )
        img.setAttribute( "src", photos[i].thumbnailUrl )
        li.appendChild(img)
        li.setAttribute('style',"display:inline")
        ul.appendChild(li)
    }
})}))