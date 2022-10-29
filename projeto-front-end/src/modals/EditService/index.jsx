import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const EditServiceModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <button onClick={handleOpen}>Click here</button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <div className="title">
                <h3>Edite o serviço</h3>
                <button onClick={handleClose}>X</button>
              </div>
              <div className="body">
                <form onSubmit={handleSubmit()}>
                  <Input
                    label="Editar preço"
                    placeholder="R$100"
                    {...register("value")}
                  />

                  <Input
                    label="Editar detalhes"
                    placeholder="Descrição"
                    {...register("description")}
                  />
                  <div>
                    <label title="select"> Editar Categoria </label>
                    <select
                      label="Categoria"
                      title="select"
                      id="select"
                      {...register("type")}
                    >
                      <option value="Frete">Frete</option>
                      <option value="Construção Civil">Construção Civil</option>
                      <option value="Serviços Domésticos">
                        Serviços Domésticos
                      </option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <Button type="submit">Salvar alterações</Button>
                </form>
              </div>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default EditServiceModal;
