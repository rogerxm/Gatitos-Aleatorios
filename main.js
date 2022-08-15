console.log('Hello world')

const url = 'https://api.thecatapi.com/v1/images/search';

fetch(url)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });