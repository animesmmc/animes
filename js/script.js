const form = document.querySelector('#form');
const id = document.querySelector('#idAnime');
const nomeAnime = document.querySelector('#nomeAnime');
const episodio = document.querySelector('#episodio');
const qualidade = document.querySelector('#qualidade')
const video = document.querySelector('#video');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const URL = `https://lightspeedst.net/s${id.value}/mp4/${nomeAnime.value}/${qualidade.value}/${episodio.value}.mp4`;
    video.src = URL;
});
