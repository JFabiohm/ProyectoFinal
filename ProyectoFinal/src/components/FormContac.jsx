import "../styles/Contac.css";

function FormContac() {
  return (
    <div>
      <form className="Form">
        <div>
          <h3 className="titulo">Contactanos</h3>
        </div>
        <label className="label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="input"
          type="text"
          id="nombre"
          name="nombre"
          required
        />

        <label className="label" htmlFor="apellido">
          Apellido
        </label>
        <input
          className="input"
          type="text"
          id="apellido"
          name="apellido"
          required
        />

        <label className="label" htmlFor="telefono">
          Número de Teléfono
        </label>
        <input
          className="input"
          type="tel"
          id="telefono"
          name="telefono"
          required
        />

        <label className="label" htmlFor="correo">
          Correo Electrónico
        </label>
        <input
          className="input"
          type="email"
          id="correo"
          name="correo"
          required
        />

        <button type="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormContac;
