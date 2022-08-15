const url = 'https://api.thecatapi.com/v1/images/search';

async function getCat() {
    const response = await fetch(url);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}
const button = document.querySelector('input');
button.onclick = getCat;   