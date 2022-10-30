const previousButton = document.querySelector('#previous');
const previousButtonUnable = document.querySelector('#previous-unable');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const nextButton = document.querySelector('#next');
const nextButtonUnable = document.querySelector('#next-unable');
const album = document.querySelector('#album');
const title = document.querySelector('#tittle');
const artist = document.querySelector('#artist');

previousButton.addEventListener('click', previous);
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
nextButton.addEventListener('click', next);

const tracks = [
    '../assets/tracks/Dead Or Alive - You Spin Me Round (Like a Record).mp3',
    '../assets/tracks/Modern Talking - Cheri Cheri Lady.mp3',
    '../assets/tracks/Rick Astley - Never Gonna Give You Up.mp3',
    '../assets/tracks/The Outfield - Your Love.mp3'
];

const track = new Audio();
track.src = tracks[0];

function play() {
    track.play();
    console.log(counter);

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
        track.src = tracks[1];
        track.play();
        album.src = '../assets/albums/cheri.jpg';
        title.innerHTML = 'Cheri Cheri Lady';
        artist.innerHTML = 'Modern Talking';
    }


    if (counter === 2) {
        track.src = tracks[2];
        track.play();
        album.src = '../assets/albums/never.jpg';
        title.innerHTML = 'Never Gonna Give You Up';
        artist.innerHTML = 'Your Love';
    }

    if (counter === 3) {
        track.src = tracks[3];
        track.play();
        album.src = '../assets/albums/OutfieldYourlove.jpg';
        title.innerHTML = 'Your Love';
        artist.innerHTML = 'The Outfield';
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
        track.src = tracks[0];
        track.play();
        album.src = '../assets/albums/you_spin_me.jpg';
        title.innerHTML = 'You Spin Me Round (Like A Record)';
        artist.innerHTML = 'Dead or Alive';
    }

    if (counter === 1) {
        track.src = tracks[1];
        track.play();
        album.src = '../assets/albums/cheri.jpg';
        title.innerHTML = 'Cheri Cheri Lady';
        artist.innerHTML = 'Modern Talking';
    }

    if (counter === 2) {
        track.src = tracks[2];
        track.play();
        album.src = '../assets/albums/never.jpg';
        title.innerHTML = 'Never Gonna Give You Up';
        artist.innerHTML = 'Your Love';


        nextButton.style.display = 'block';
        nextButtonUnable.style.display = 'none';
    }


    if (counter <= 0) {
        previousButton.style.display = 'none';
        previousButtonUnable.style.display = 'block';
    }

}