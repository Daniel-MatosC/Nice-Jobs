import ServicesAnimation from "../animations/EmptyServices";
import { Container } from "./styles";

const EmptyServices = () => {
  return (
    <Container>
      <ServicesAnimation />
      <h3>Não há serviços cadastrados</h3>
    </Container>
  );
};

export default EmptyServices;
