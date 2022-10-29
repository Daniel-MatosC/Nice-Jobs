import { useContext, useState } from "react";
import * as yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Container, ModalButton } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicesContext } from "../../context/Services";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const AddServiceModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome do serviço obrigatório"),
    value: yup.string().required("Preço obrigatório"),
    description: yup.string().required("Descrição do serviço obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { createService } = useContext(ServicesContext);

  const handleAdd = (data) => {
    const userId = localStorage.getItem("@Nice-jobs:id");

    createService(data, userId);
    handleClose();
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return (
    <div>
      <ModalButton onClick={handleOpen}>Cadastrar Serviço</ModalButton>
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
                <h3>Cadastre o serviço</h3>
                <button onClick={handleClose}>X</button>
              </div>
              <div className="body">
                <form onSubmit={handleSubmit(handleAdd)}>
                  <Input
                    label="Nome do serviço"
                    placeholder="Frete"
                    {...register("name")}
                  />
                  <span className="error">{errors.name?.message}</span>
                  <Input
                    label="Preço"
                    placeholder="R$100"
                    {...register("value")}
                  />
                  <span className="error">{errors.value?.message}</span>

                  <Input
                    label="Detalhes"
                    placeholder="Descreva seu serviço"
                    {...register("description")}
                  />
                  <span className="error">{errors.description?.message}</span>
                  <div>
                    <label name="select">Categoria</label>
                    <select
                      label="Categoria"
                      title="select"
                      id="select"
                      {...register("category")}
                    >
                      <option value="Construção Civil">Construção Civil</option>
                      <option value="Manutenção de Eletronicos">
                        Manutenção de Eletronicos
                      </option>
                      <option value="Frete">Frete</option>
                      <option value="Serviços Domésticos">
                        Serviços Domésticos
                      </option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  <Button type="submit">Cadastrar</Button>
                </form>
              </div>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AddServiceModal;
