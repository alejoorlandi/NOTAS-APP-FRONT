import NoteForm from "../components/NoteForm";
import axios from "axios";
import { toast } from "react-toastify";
const CreateNotePage = () => {
  const handleCreate = async (note) => {
    try {
      await axios;
      // .post(`${import.meta.env.VITE_API_URL}/api/notes`, note)
      await axios
        .post(`${import.meta.env.VITE_API_URL}/notes`, note)

        .then((res) => {
          if (res.status !== 201) {
            throw new Error("Error al crear una nota");
          }
          (toast.success("Nota creada con exito"),
            {
              position: "bottom-center",
              autoclose: 3000,
              theme: "colored",
            });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NoteForm
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      />
    </div>
  );
};

export default CreateNotePage;
