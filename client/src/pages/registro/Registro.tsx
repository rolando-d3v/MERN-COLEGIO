import { useParams } from "react-router-dom";
import Formulario from "../../components/form/Formulario";
import "./registro.scss";

interface Paramsx {
  id: string;
}

export default function Registro() {
  const params = useParams<Paramsx>();
  let id = params.id;

  return (
    <div className="div_registro">
      <Formulario id={id} />
    </div>
  );
}
