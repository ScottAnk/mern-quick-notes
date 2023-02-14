export default function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <p>no one here but us chickens. Start typing above to make some notes</p>
    )
  } else {
    const noteElements = notes.map((note, index) => (
      <li key={index}>{note.text}</li>
    ))

    return <ul>{noteElements}</ul>
  }
}
