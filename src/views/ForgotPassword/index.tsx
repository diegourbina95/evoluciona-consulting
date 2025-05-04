import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  document.querySelector(".app")?.classList.remove("layout-boxed");
  return (
    <div className="">
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title pb-5">
              Recuperar Contraseña
            </span>
            <p className="text-muted">
              Agregue el correo registrado para reestablecer
              <br />
              su contraseña
            </p>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link to="#" className="input-group-text bg-white text-muted">
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="submit">
              <Link
                className="btn btn-primary d-grid"
                to={`${import.meta.env.BASE_URL}dashboard/`}
              >
                Enviar
              </Link>
            </div>
            <div className="text-center mt-4">
              <div className="text-dark mb-0">
                <Link
                  className="text-primary ms-1 d-flex justify-content-center align-items-center"
                  to={`${import.meta.env.BASE_URL}login/`}
                >
                  <i className="fe fe-arrow-left fs-15"></i>
                  <span className="ms-1">Regresar</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
