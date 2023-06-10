/*Get elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.video');
const button = player.querySelector('.video-controls button');
const volumeSlider = player.querySelector('.player_slider');


/*Build functions*/
function playPause() {
    if (video.paused) {
        video.play();
        console.log('>>');
    } else {
        video.pause();
        console.log('||');
    }
    refreshButton();
}

function refreshButton() {
    const icon = video.paused ? '>>' : '||';
}

function changeVolume() {
    video.volume = volumeSlider.value;
}


/*Event listeners*/
video.addEventListener('click', playPause);
volumeSlider.addEventListener('change', changeVolume);
