import { ChangeEvent, FormEvent, useState } from "react";
import { clienteAxios } from "../../config/clienteAxios";
import { VideoType } from "../../types";
import "./formulario.scss";

export default function Formulario() {
  const [dataForm, setDataForm] = useState<VideoType>({
    title: "",
    description: "",
    url: "",
  });

  type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const dataInput = (e: inputChange) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const enviarRegistro = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataForm);
           await clienteAxios.post('/videos', dataForm)
    
  };

  return (
    <div className="div_form">
      <h3 className='title_form' >Crear nuevo video</h3>
      <form className="form_registro" onSubmit={enviarRegistro}>
        <section className="div_input">
          <label className="label_form">Title</label>
          <input
            type="text"
            autoComplete='off'
            name="title"
            placeholder="ingrese titulo"
            className="form_input"
            onChange={dataInput}
            />
        </section>
        <section className="div_input">
          <label className="label_form">Url</label>
          <input
            type="text"
            autoComplete='off'
            name="url"
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
            className="form_input_text_area"
            onChange={dataInput}
          />
        </section>

        <button className="btn_form" type="submit">
          Crear{" "}
        </button>
      </form>
    </div>
  );
}
