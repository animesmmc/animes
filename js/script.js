const form = document.querySelector('#form');
const nomeAnime = document.querySelector('#nomeAnime');
const episodio = document.querySelector('#episodio');
const video = document.querySelector('#video')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const URL = `https://lightspeedst.net/s3/mp4/${nomeAnime.value}/sd/${episodio.value}.mp4`;

});