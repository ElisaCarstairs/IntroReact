function Container () {
    const [search, setSearch] = useState("")
    const songs = [
        {
            id: 1,
            title: "Radioactive",
            artist: "Imagine Dragons",
            album: "Night Visions",
            year: 2015
    },
    {
            id: 2,
            title: "Shape of You",
            artist: "Ed Sheeran",
            album: "X",
            year: 2017
    },
    {
            id: 3,
            title: "The Way it Was",
            artist: "The Killers",
            album: "Hot Fuss",
            year: 2004
    },
    {
            id: 4,
            title: "Read my mind",
            artist: "The Killers",
            album: "Hot Fuss",
            year:   2004
    },
    {
            id: 5,
            title: "22",
            artist: "Taylor Swift",
            album: "RED",
            year: 2012
    },
    {
            id: 6,
            title: "All too well",
            artist: "Taylor Swift",
            album: "Red",
            year: 2012
    },
    {
            id: 7,
            title: "Blank Space",
            artist: "Taylor Swift",
            album: "1989",
            year: 2014
    },
    {
            id: 8,
            title: "Style",
            artist: "Taylor Swift",
            album: "1989",
            year: 2014
    }
    ]
    
    return (
        <div>
            <h1>Lista de canciones</h1>
            <ul>
                {songs.map(song => <li key={song.id}>{song.title} - {song.artist}</li> )}
            </ul>
        
        </div>
    )
}
export default Container
