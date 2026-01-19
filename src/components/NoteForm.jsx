const NoteForm = () => {
  return (
    <form className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10">
      <input
        className="block w-full mb-8 input lg:input-lg focus:ring-0 focus:outline-0 border-0"
        type="text"
        placeholder="Título"
        id="title"
        name="title"
        required
      />
      <textarea
        className=" input lg:input-lg resize-y mb-8 w-full textarea focus:outline-0 border-0"
        placeholder="Descripción de la tarea..."
        id="description"
        name="description"
        required
      ></textarea>
    </form>
  );
};

export default NoteForm;
