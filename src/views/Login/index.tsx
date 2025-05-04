import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Imagesdata } from "@/commondata/commonimages";

export default function LoginPage() {
  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    email: "adminreact@gmail.com",
    password: "1234567890",
  });
  const { email, password } = data;
  const navigate = useNavigate();

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const RouteChange = () => {
    const path = `${import.meta.env.BASE_URL}dashboard`;
    navigate(path);
  };

  const Login = (_e: any) => {
    if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
      RouteChange();
    } else {
      setError("The Auction details did not Match");
      setData({
        email: "adminreact@gmail.com",
        password: "1234567890",
      });
    }
  };
  return (
    <div className="login-img">
      <div className="page">
        <div className="container-login100">
          <div className="wrap-login100 p-6">
            <div className="text-center">
              <img
                src={Imagesdata("logo")}
                className="header-brand-img"
                alt=""
              />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5 mt-5"> Login</span>
              <div
                className="wrap-input100 validate-input input-group"
                data-bs-validate="Valid email is required: ex@abc.xyz"
              >
                <Link to="#" className="input-group-text bg-white text-muted">
                  <i
                    className="zmdi zmdi-email text-muted"
                    aria-hidden="true"
                  ></i>
                </Link>
                <Form.Control
                  className="input100 border-start-0 form-control ms-0"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={changeHandler}
                />
              </div>
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
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={changeHandler}
                  required
                />
              </InputGroup>
              <div className="container-login100-form-btn">
                <Link
                  to={`${import.meta.env.BASE_URL}dashboard`}
                  onClick={Login}
                  className="login100-form-btn btn-primary"
                >
                  Login
                  {loading ? (
                    <span
                      role="status"
                      aria-hidden="true"
                      className="spinner-border spinner-border-sm ms-2"
                    ></span>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <div className="text-end pt-3">
                <p className="text-dark mb-0 fs-13">
                  <Link
                    to={`${import.meta.env.BASE_URL}recuperar-password`}
                    className="text-primary ms-1"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
