import { Link } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

const ChangePasswordPage = () => {
  const [err, setError] = useState("");
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    password1: "",
    password2: "",
  });
  const { password1, password2 } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  return (
    <div className="">
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title pb-5">Cambiar Contraseña</span>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <InputGroup
                className="wrap-input100 validate-input"
                id="Password-toggle"
              >
                <InputGroup.Text
                  id="basic-addon2"
                  onClick={() => setpasswordshow(!passwordshow)}
                  className="bg-white p-0"
                >
                  <Link to="#" className="bg-white text-muted p-3">
                    <i
                      className={`zmdi ${
                        passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                      } text-muted`}
                      aria-hidden="true"
                    ></i>
                  </Link>
                </InputGroup.Text>
                <Form.Control
                  type={passwordshow ? "text" : "password"}
                  name="password1"
                  placeholder="Nueva contraseña"
                  value={password1}
                  onChange={changeHandler}
                  required
                />
              </InputGroup>
              <InputGroup
                className="wrap-input100 validate-input"
                id="Password-toggle"
              >
                <InputGroup.Text
                  id="basic-addon2"
                  onClick={() => setpasswordshow(!passwordshow)}
                  className="bg-white p-0"
                >
                  <Link to="#" className="bg-white text-muted p-3">
                    <i
                      className={`zmdi ${
                        passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                      } text-muted`}
                      aria-hidden="true"
                    ></i>
                  </Link>
                </InputGroup.Text>
                <Form.Control
                  type={passwordshow ? "text" : "password"}
                  name="password2"
                  placeholder="Confirmar contraseña"
                  value={password2}
                  onChange={changeHandler}
                  required
                />
              </InputGroup>
            </div>
            <div className="submit">
              <Link
                className="btn btn-primary d-grid"
                to={`${import.meta.env.BASE_URL}dashboard/`}
              >
                Enviar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
