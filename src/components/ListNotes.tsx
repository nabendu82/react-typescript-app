import { Note } from '../models/note.model';
import Notes from './Notes';

interface IListNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const ListNotes: React.FC<IListNotesProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => setNotes(notes.filter(note => note.id !== id))
    
    return (
        <>
            <h2 className="mt-4">Notes</h2>
            <div>{notes.map(note => <Notes key={note.id} note={note} handleDelete={handleDelete} />)}</div>
        </>
    );
};

export default ListNotes;