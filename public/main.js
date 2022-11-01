// nodes
const previousButton = document.querySelector('#previous');
const previousButtonUnable = document.querySelector('#previous-unable');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const nextButton = document.querySelector('#next');
const nextButtonUnable = document.querySelector('#next-unable');
const album = document.querySelector('#album');
const title = document.querySelector('#tittle');
const artist = document.querySelector('#artist');
const progressBar = document.querySelector('#progress-bar');
const currentTimeDisplay = document.querySelector('#currentTime');
const totalTimeDisplay = document.querySelector('#totalTime');

previousButton.addEventListener('click', previous);
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
nextButton.addEventListener('click', next);
progressBar.addEventListener('click', timeSelected);

// playlist
const tracks = [
    {
        tittle: 'You Spin Me Round (Like a Record)',
        artist: 'Dead or Alive',
        track: '../assets/tracks/Dead Or Alive - You Spin Me Round (Like a Record).mp3',
        cover: '../assets/albums/you_spin_me.jpg'
    },
    {
        tittle: 'Cheri Cheri Lady',
        artist: 'Modern Talking',
        track: '../assets/tracks/Modern Talking - Cheri Cheri Lady.mp3',
        cover: '../assets/albums/cheri.jpg'
    },
    {
        tittle: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        track: '../assets/tracks/Rick Astley - Never Gonna Give You Up.mp3',
        cover: '../assets/albums/never.jpg'
    },
    {
        tittle: 'Your Love',
        artist: 'The Outfield',
        track: '../assets/tracks/The Outfield - Your Love.mp3',
        cover: '../assets/albums/OutfieldYourlove.jpg'
    },
];

// new instance of Audio
const track = new Audio();

// page loaded
window.addEventListener('load', () => {
    track.addEventListener('timeupdate', updateTime)
    track.src = tracks[0].track;
})

// buttons events
function play() {
    track.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
}

function pause() {
    track.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
}

let counter = 0;

function next() {
    track.pause();
    previousButtonUnable.style.display = 'none';
    previousButton.style.display = 'block';

    counter++;
    console.log(counter);

    if (counter === 1) {
        track.src = tracks[1].track;
        track.play();
        album.src = tracks[1].cover;
        title.innerHTML = tracks[1].tittle;
        artist.innerHTML = tracks[1].artist;
    }
    if (counter === 2) {
        track.src = tracks[2].track;
        track.play();
        album.src = tracks[2].cover;
        title.innerHTML = tracks[2].tittle;
        artist.innerHTML = tracks[2].artist;
    }
    if (counter === 3) {
        track.src = tracks[3].track;
        track.play();
        album.src = tracks[3].cover;
        title.innerHTML = tracks[3].tittle;
        artist.innerHTML = tracks[3].artist;
    }

    if (counter >= 3) {
        nextButton.style.display = 'none';
        nextButtonUnable.style.display = 'block';
    }
}

function previous() {
    track.pause();

    counter--;
    console.log(counter);

    if (counter === 0) {
        track.src = tracks[0].track;
        track.play();
        album.src = tracks[0].cover;
        title.innerHTML = tracks[0].tittle;
        artist.innerHTML = tracks[0].artist;
    }

    if (counter === 1) {
        track.src = tracks[1].track;
        track.play();
        album.src = tracks[1].cover;
        title.innerHTML = tracks[1].tittle;
        artist.innerHTML = tracks[1].artist;
    }

    if (counter === 2) {
        track.src = tracks[2].track;
        track.play();
        album.src = tracks[2].cover;
        title.innerHTML = tracks[2].tittle;
        artist.innerHTML = tracks[2].artist;


        nextButton.style.display = 'block';
        nextButtonUnable.style.display = 'none';
    }


    if (counter <= 0) {
        previousButton.style.display = 'none';
        previousButtonUnable.style.display = 'block';
    }

}

// progress bar

function updateTime() {
    const duration = (track.currentTime / track.duration) * 100;
    console.log(duration);
    progress.style.width = duration + '%';

    if (duration === 100) {
        next();
    }
}

function timeSelected(e) {
    console.log(e);
}