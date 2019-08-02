function getPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            showPhotoInDoc(myJson);
        });

}

function showPhotoInDoc(photos) {
    var node = document.createElement("DIV");
    var img = [];
    var i = 0;
    photos.forEach(function (element) {
        img.push(document.createElement("img"));
        img[i].setAttribute("src", element.url);

        node.appendChild(img[i]);

        i ++;

    });

    document.getElementById("placehere").appendChild(node);
    

}