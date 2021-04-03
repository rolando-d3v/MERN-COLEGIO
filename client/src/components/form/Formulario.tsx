import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as api from "../../config/videoApi";
import { VideoType } from "../../types";
import "./formulario.scss";

interface Props {
  id: string;
}

export default function Formulario({ id }: Props) {
  const [dataForm, setDataForm] = useState<VideoType>({
    title: "",
    description: "",
    url: "",
  });

  const { title, description, url } = dataForm;
  const history = useHistory();

  type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const dataInput = (e: inputChange) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const enviarRegistro = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) return toast.error("Campo requerido ❗❗ ");

    if (!id) {
      await api.createNewVideo(dataForm);
      toast.success("Nuevo video agregado 😃  ✔️ ");
    } else {
      await api.updateVideo(id, dataForm);
      toast.success("Video actualizado 😃  ✔️ ");
    }
    setDataForm({
      title: "",
      description: "",
      url: "",
    });
    history.push("/");
  };

  useEffect(() => {
    (async () => {
      if (id) {
        const video = await api.getVideoById(id)
        setDataForm({
          title: video.data.title,
          description: video.data.description,
          url: video.data.url,
        });
      }
    })();
  }, []);

  return (
    <div className="div_form">
      <h3 className="title_form">Crear nuevo video</h3>
      <form className="form_registro" onSubmit={enviarRegistro}>
        <section className="div_input">
          <label className="label_form">Title</label>
          <input
            type="text"
            autoComplete="off"
            name="title"
            value={title}
            placeholder="ingrese titulo"
            className="form_input"
            onChange={dataInput}
          />
        </section>
        <section className="div_input">
          <label className="label_form">Url</label>
          <input
            type="text"
            autoComplete="off"
            name="url"
            value={url}
            placeholder="ingrese url"
            className="form_input"
            onChange={dataInput}
          />
        </section>
        <section className="div_input">
          <label className="label_form">Descripcion</label>
          <textarea
            name="description"
            placeholder="ingrese una description"
            value={description}
            className="form_input_text_area"
            onChange={dataInput}
          />
        </section>

        {id ? (
          <button className="btn_form" type="submit">
            Actualizar
          </button>
        ) : (
          <button className="btn_form" type="submit">
            Crear
          </button>
        )}
      </form>
    </div>
  );
}
