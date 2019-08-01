
fetch( 'https://jsonplaceholder.typicode.com/photos' )
    .then(response => response.json() ).then( photos => {
        ul = document.getElementById( "image-container" );
            for( var i = 0; i < photos.length; i++ ){
                li = document.createElement( 'li' );
                img = document.createElement( 'img' );
                img.setAttribute( "src", photos[i].thumbnailUrl );
                img.setAttribute("alt", "Photo" );  
                li.appendChild(img);
                ul.appendChild(li);
            }
    })
    .catch(function(error) {
        console.log(error);
    })
