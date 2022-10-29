import Button from "@mui/material/Button";
import { Container } from "./style";

const BasicButtons = ({ children, type }) => {
  return (
    <Container>
      <Button className="button" variant="contained" type={type}>
        {children}
      </Button>
    </Container>
  );
};
export default BasicButtons;
