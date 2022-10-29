import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container, Form, Button } from "./styles";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 0,
};

export default function ModalPerfil() {
  const { editUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();

  const handleEdit = ({ name, contact, bio, image }) => {
    const userId = localStorage.getItem("@Nice-jobs:id");

    let data = {};

    if (name) {
      data = { ...data, name };
    }
    if (contact) {
      data = { ...data, contact };
    }
    if (bio) {
      data = { ...data, bio };
    }
    if (image) {
      data = { ...data, image };
    }

    editUser(data, userId);
    handleClose();
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Editar Perfil</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <div className="headerModal">
              <h3 className="h3EditPerfil">Editar Perfil</h3>
              <p onClick={handleClose}>X</p>
            </div>
            <div>
              <Form onSubmit={handleSubmit(handleEdit)}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Insira seu novo nome"
                  {...register("name")}
                />
                <label>Contato</label>
                <input
                  className="contact"
                  type="number"
                  placeholder="Insira seu novo contato"
                  {...register("contact")}
                />
                <label>Bio</label>
                <input
                  type="text"
                  placeholder="Insira sua nova bio"
                  {...register("bio")}
                />
                <label>Imagem</label>
                <input
                  type="url"
                  placeholder="Insira sua nova imagem"
                  {...register("image")}
                />
                <button type="submit">Salvar</button>
              </Form>
            </div>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
