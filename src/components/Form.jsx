

const Form = () => {
  return (
    <form action="" className="form">
        <h2 className="form-title">Crear Usuario</h2>
        <div className="form-container">
            <div className="form-group">
                <input type="text" id="name" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label">Nombre:</label>
                <span className="form-line"></span>
            </div>
            <div className="form-group">
                <input type="text" id="last-name" className="form-input" placeholder=" " />
                <label htmlFor="last-name" className="form-label">Apellido:</label>
                <span className="form-line"></span>
            </div>
            <div className="form-group">
                <input type="text" id="email" className="form-input" placeholder=" " />
                <label htmlFor="email" className="form-label">Email:</label>
                <span className="form-line"></span>
            </div>
            <div className="form-group">
                <input type="password" id="password" className="form-input" placeholder=" " />
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <span className="form-line"></span>
            </div>
            <div className="form-group">
                <input type="date" id="date" className="form-input" placeholder=" " />
                <label htmlFor="date" className="form-label">Fecha:</label>
                <span className="form-line"></span>
            </div>

            <input type="submit" className="form-submit" value={"Crear Usuario"}/>
        </div>
    </form>
  )
}

export default Form