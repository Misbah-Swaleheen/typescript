interface Song {
    songName: string,
    singerName: string,
    printSongInfo( songName: string, singerName: string) : string;
}

const song1 : Song ={
    songName: 'Natural',
    singerName: 'Imagin Drigon',
    printSongInfo(songName: string, singerName: string) {
        return `Song: ${songName}, Singer: ${singerName}`;
    }
}

console.log(song1.printSongInfo(song1.songName, song1.singerName));