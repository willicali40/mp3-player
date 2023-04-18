# MP3 Player

This is a simple MP3 player developed with vanilla JavaScript. The player is designed to play four of your favorite songs.

## Features

The MP3 player has the following features:

- Play, Pause, Stop and Next buttons
- Current time and duration of the song
- Playlist menu

## Installation

To use this MP3 player, simply download or clone this repository to your local machine. You can then open the index.html file in your web browser to access the player.

## Usage

To play a song, simply click on the Play button. You can pause the song by clicking on the Pause button. To stop the song, click on the Stop button. Click on the Next button to play the next song. The current time and duration of the song are displayed below the progress bar. 

## Adding songs

To add your favorite songs to the player, simply add the MP3 files to the `songs` folder in the repository. Then, edit the `songs.js` file and add the details of your songs to the `songs` array. The details should include the name of the song, the artist, and the file name of the MP3 file.

```javascript
const tracks  = [
  {
    name: 'Song 1',
    artist: 'Artist 1',
    url: 'song1.mp3'
  },
  {
    name: 'Song 2',
    artist: 'Artist 2',
    url: 'song2.mp3'
  },
  {
    name: 'Song 3',
    artist: 'Artist 3',
    url: 'song3.mp3'
  },
  {
    name: 'Song 4',
    artist: 'Artist 4',
    url: 'song4.mp3'
  }
];
```

## Credits

This MP3 player was developed by William David as a challenge on the ManzDev site. It uses the following resources:

- 'https://lenguajejs.com/retos/nivel-medio/mp3-player/'

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
