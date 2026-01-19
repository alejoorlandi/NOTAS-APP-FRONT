// import { useEffect,useState } from "react";

// const NoteForm = ({onSubmit,initialDate}) => {
//     const[note , setNotes]= useState(initialDate);

//     // necesitamos actualizar los cambios si los datos iniciales cambian
//     useEffect(() => {
//         setNotes(initialDate);
//     }, [initialDate]);

//     const handleChange = (e) => {
//         setNotes   ({...note, [e.target.name]: e.target.value});

//      const handleSubmit = (e) => {
//             e.preventDefault();
//             onSubmit(note);
//         }
//   return (
//     <form  onSubmit={handleSubmit} className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10">
//       <input
//         className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
//         type="text"
//         placeholder="Título"
//         id="title"
//         name="title"
//         value={note.title}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         className=" input lg:input-lg resize-y mb-8 w-full textarea focus:outline-0 border-0"
//         placeholder="Descripción de la tarea..."
//         id="description"
//         value={note.description}
//         onChange={handleChange}
//         name="description"

//         required
//       ></textarea>
//         <button className="btn btn-soft btn-primary" > Guardar</button>
//     </form>
//   );
// };

// export default NoteForm;

import { useState, useEffect } from "react";

const NoteForm = ({ onSubmit, initialDate }) => {
  const [note, setNotes] = useState(initialDate);

  // Actualizar el estado si cambian los datos iniciales
  useEffect(() => {
    setNotes(initialDate);
  }, [initialDate]);

  const handleChange = (e) => {
    setNotes({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10"
    >
      <input
        className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
        type="text"
        placeholder="Título"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />

      <textarea
        className="input lg:input-lg resize-y mb-8 w-full textarea focus:outline-0 border-0"
        placeholder="Descripción de la tarea..."
        id="description"
        name="description"
        value={note.description}
        onChange={handleChange}
        required
      ></textarea>

      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  );
};

export default NoteForm;
