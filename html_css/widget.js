/*Get elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.video');
const button = player.querySelector('.video-controls button');


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

/*Event listeners*/
video.addEventListener('click', playPause);

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.video.player');
    var volumeSlider = document.getElementById('slider');

    volumeSlider.addEventListener('input', function() {
        video.volume = volumeSlider.value;
    });
});