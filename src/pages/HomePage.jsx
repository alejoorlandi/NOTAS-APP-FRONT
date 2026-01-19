import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../store/slices/notesSlice';
import { useSelector } from "react-redux";
import CardNote from "../components/CardNote";
import formatData from "../utils/formatDate";
const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const dispatch = useDispatch();
  const { notes, status, error } = useSelector((state) => state.notes);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <span>Cargando...</span>;
  if (status === 'failed') return <span>Error: {error}</span>;

  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold mb-2">No hay notas aún</h2>
        <p className="text-gray-400">¡Crea tu primera nota para empezar!</p>
      </div>
    );
  }

  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h2 className="text-2xl font-bold mb-2">No estas logueado</h2>
          <p className="text-gray-400">¡Inicia sesión para ver tus notas!</p>
          <Link to="/login" className="text-blue-600 hover:underline">
            Inicia Sesión
          </Link>
        </div>
      </>
    )
  }

  else {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
        {notes.map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
            id={note._id}
            priority={note.priority}
            isCompleted={note.isCompleted}
            date={formatData(note.createdAt)}
          />
        ))}
      </div>
    );
  }
};

export default HomePage;
