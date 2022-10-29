import { forwardRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Container } from "./style";
const InputPassword = forwardRef(({ label, id, ...rest }, ref) => {
  const [type, setType] = useState("password");

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <div className="inputPassword">
        <input type={type} id={id} {...rest} ref={ref} />

        {type === "password" ? (
          <FiEyeOff onClick={() => setType("text")} />
        ) : (
          <FiEye onClick={() => setType("password")} />
        )}
      </div>
    </Container>
  );
});
export default InputPassword;
