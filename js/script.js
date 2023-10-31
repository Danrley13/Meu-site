// tres (3) constantes para referencia as items divs de projetos 

const album = document.getElementById('album');


// tres (3) constants para referencia os id's do iFrames
const videoAlbum = document.querySelector('#videoAlmbum');

//evento click 
album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});

