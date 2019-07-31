fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(posts => {
        ul = document.getElementById("lists");
        for (i = 0; i < posts.length; i++) {
            li = document.createElement('li');
            img = document.createElement('img');
            img.setAttribute("src", posts[i].thumbnailUrl);
            li.appendChild(img);
            ul.appendChild(li);
        }
    })
