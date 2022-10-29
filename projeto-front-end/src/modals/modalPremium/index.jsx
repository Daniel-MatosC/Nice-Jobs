import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container, Button } from "./styles";
import { FaCrown } from "react-icons/fa";
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

export default function ModalPremium() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const notify = () =>
    toast.warn("Desculpe, nós ainda estamos em desenvolvimento :(", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });

  return (
    <div>
      <Button onClick={handleOpen}>
        Nice Chat <FaCrown className="crown" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <p className="pClose" onClick={handleClose}>
              X
            </p>
            <p className="signature">
              <FaCrown className="crown" /> Faça uma assinatura para utilizar
              esse recurso
            </p>
            <h3>
              Experimente o NiceJobs{" "}
              <span className="premiumSpan">Premium</span> e alcance mais
              clientes
            </h3>
            <p className="pPremium">
              Destaque seus serviços, tenha acesso a recursos exclusivos e
              otimize suas contratações. Com o NiceJobs Premium, você alcança
              mais resltados em menos tempo.
            </p>
            <ul>
              <li>
                <FaCrown className="crown" /> Publique seus serviços de maneira
                ilimitada
              </li>
              <li>
                <FaCrown className="crown" /> Tenha acesso a um chat exclusivo
                para facilitar o contato com seu cliente
              </li>
              <li>
                <FaCrown className="crown" /> Apareça com preferência nas buscas
                dos usuários
              </li>
            </ul>
            <button onClick={notify}>Quero ser Premium</button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
