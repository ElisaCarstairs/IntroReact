function SongList({ songs }) {
  return (
    <ul>
      {songs.map(song => (
        <li key={song.id}>
          {song.title} - {song.artist}
        </li>
      ))}
    </ul>
  )
}

export default SongList
