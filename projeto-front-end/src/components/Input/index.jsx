import { forwardRef } from "react";
import { Container } from "./style";
const Input = forwardRef(({ label, id, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} ref={ref} />
    </Container>
  );
});
export default Input;
