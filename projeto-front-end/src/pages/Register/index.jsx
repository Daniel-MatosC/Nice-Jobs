import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import Form from "../../components/Form";

import { Container } from "./style";

const Register = () => {
  return (
    <Container>
      <div className="registerForm">
        <div className="imgDiv">
          <img src={logo} alt="Logo NiceJobs" />
        </div>

        <Form type="register" />

        <div className="redirectDiv">
          <p>
            Já possui cadastro? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Register;
