import React from "react";



const Form = ({ createUsers, getUsers, update, objectUpdate,setObjectUpdate,register,handleSubmit,reset }) => {
 

  const defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };
  

  const submit = (data) => {
    if (objectUpdate?.id !== undefined) {
        update(objectUpdate.id, data)
        setObjectUpdate("")
        getUsers()
    } else {
      createUsers(data);
      getUsers()
    }
    reset(defaultValue);
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form-title">Crear Usuario</h2>
      <div className="form-container">
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder=" "
            {...register("first_name")}
          />
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last-name"
            className="form-input"
            placeholder=" "
            {...register("last_name")}
          />
          <label htmlFor="last-name" className="form-label">
            Apellido:
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            className="form-input"
            placeholder=" "
            {...register("email")}
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder=" "
            {...register("password")}
          />
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <span className="form-line"></span>
        </div>
        <div className="form-group">
          <input
            type="date"
            id="date"
            className="form-input"
            placeholder=" "
            {...register("birthday")}
          />
          <label htmlFor="date" className="form-label">
            Fecha:
          </label>
          <span className="form-line"></span>
        </div>
        <button className="form-submit">Crear Usuario</button>
      </div>
    </form>
  );
};

export default Form;
