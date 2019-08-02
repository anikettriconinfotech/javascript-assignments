const fetchPromises = fetch("https://jsonplaceholder.typicode.com/photos");

view = document.getElementById("main");
main.innerHTML = "<p>Loading...";


fetchPromises.then(response => {
    return response.json();
}).then(image => {
    const value = image.map(function (album) {
        return album
    });

    for (var i = 0; i <= value.length - 1; i++) {
        images = value[i]

        img = document.createElement('img');
        id = document.createElement('id');
        title = document.createElement('name');
        br = document.createElement('br');
        img.setAttribute('src', images.thumbnailUrl);
        element = document.getElementById('main')
        div1 = document.createElement('div')
        element.appendChild(id)
        element.appendChild(br)
        element.appendChild(title)
        title.innerHTML = images.title
        element.appendChild(div1)
        id.innerHTML = images.id
        div1.appendChild(img)

    }

});





