const listOfSongs = [
  {
    title: 'Midnight Stroll',
    artist: 'Smooth Grooves',
    genre: 'Jazz',
    duration: 320,
  },
  {
    title: 'aaaa',
    artist: 'x Grooves',
    genre: 'Jazz',
    duration: 390,
  },
  {
    title: 'Highway Blues',
    artist: 'Guitar Guru',
    genre: 'Blues',
    duration: 280,
  },
  {
    title: 'Eternal Love',
    artist: 'Melody Masters',
    genre: 'Ballad',
    duration: 240,
  },
  {
    title: 'Rock Revolution',
    artist: 'Power Trio',
    genre: 'Rock',
    duration: 260,
  },
  {
    title: 'Funky Groove',
    artist: 'Groove Collective',
    genre: 'Funk',
    duration: 220,
  },
  {
    title: 'Electrified',
    artist: 'Electro Beat',
    genre: 'Electronic',
    duration: 290,
  },
  {
    title: 'Sunset Serenade',
    artist: 'Chill Vibes',
    genre: 'Ambient',
    duration: 180,
  },
  {
    title: 'Latin Rhythms',
    artist: 'Rhythm Ensemble',
    genre: 'Latin',
    duration: 240,
  },
  {
    title: 'Mystic Journey',
    artist: 'Enigma Soundscapes',
    genre: 'newAge',
    duration: 350,
  },
  {
    title: 'Groovy Disco',
    artist: 'Dancefloor Kings',
    genre: 'Disco',
    duration: 280,
  },
  {
    title: 'Komang',
    artist: 'Raim Laode',
    genre: 'Pop',
    duration: 180,
  },
  {
    title: 'Kuat Kita Bersinar',
    artist: 'Superman Is Dead',
    genre: 'Rock',
    duration: 180,
  },
  {
    title: 'dan',
    artist: 'Sheila On 7',
    genre: 'Pop',
    duration: 240,
  },
  {
    title: 'Jengah',
    artist: 'Pas Band',
    genre: 'Rock',
    duration: 300,
  },
  {
    title: 'JAP',
    artist: 'Sheila On 7',
    genre: 'Pop',
    duration: 240,
  },
  {
    title: 'Dj Alam Semesta Remix',
    artist: 'Dj lina',
    genre: 'Dj',
    duration: 3900,
  },
  {
    title: 'Rindu Rumah',
    artist: 'Raim Laode',
    genre: 'Pop',
    duration: 180,
  },
  {
    title: 'dan',
    artist: 'Sheila On 7',
    genre: 'Pop',
    duration: 240,
  },
  {
    title: 'Jengah',
    artist: 'Pas Band',
    genre: 'Rock',
    duration: 300,
  },
  {
    title: 'JAP',
    artist: 'Sheila On 7',
    genre: 'Pop',
    duration: 240,
  },
  {
    title: 'Dj Alam Semesta Remix',
    artist: 'Dj lina',
    genre: 'Dj',
    duration: 3900,
  },
  {
    title: 'Rindu Rumah',
    artist: 'Raim Laode',
    genre: 'Pop',
    duration: 180,
  },
];
//console.log(listOfSongs.length);
function songByArtist(songs) {
  const groupByArtist = {};

  songs.forEach((song) => {
    const artist = song.artist;
    if (!groupByArtist[artist]) {
      groupByArtist[artist] = [];
    }
    groupByArtist[artist].push(song);
  });

  console.log('List Of Musics By Artist  : ');
  console.log(groupByArtist);
}
//songByArtist(listOfSongs);

function songByGenre(songs) {
  console.log('');
  console.log('===========divider===========');
  const groupByGenre = {};

  songs.forEach((song) => {
    const genre = song.genre;
    if (!groupByGenre[genre]) {
      groupByGenre[genre] = [];
    }
    groupByGenre[genre].push(song);
  });
  console.log('List Of Musics By Genre  : ');
  console.log(groupByGenre);
}
//songByGenre(listOfSongs);

function groupLessOneHours(songs) {
  console.log('');
  console.log('===========divider===========');
  const lessOneHourSong = songs.filter((song) => song.duration < 3600);
  const songGroup = [];
  let totalDuration = 0;

  lessOneHourSong.forEach(() => {
    if (totalDuration < 3600) {
      const randomIndex = Math.floor(Math.random() * lessOneHourSong.length);
      const randomSong = lessOneHourSong[randomIndex];

      if (totalDuration + randomSong.duration <= 3600) {
        songGroup.push(randomSong);
        totalDuration += randomSong.duration;
        //lessOneHourSong.splice(randomIndex, 1);
      }
    }
  });

  console.log('here list song :\n', songGroup);
  console.log('Total duration :', totalDuration, 'seconds or', Math.floor(totalDuration / 60), 'minutes');
  //console.log(lessOneHourSong);
}

groupLessOneHours(listOfSongs);
