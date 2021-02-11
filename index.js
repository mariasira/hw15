function renderAlbum(userId) {
    const titleLayout = document.createElement('input');

}

fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((userId) => {
        renderAlbum(userId);
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then()

    })
    .catch(() => {
        console.log('ERROR');
    });