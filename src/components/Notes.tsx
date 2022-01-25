import { Note } from '../models/note.model';
import './Notes.css'

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
    return (
            <div className="notes-container">
                <h3>{note.title}</h3>
                <p className="text-light">{note.body}</p>
                <button className="notes-btn" onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
    );
};

export default Notes;