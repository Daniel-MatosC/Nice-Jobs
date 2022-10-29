import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { DetailsStyle } from "./style";
import HireModal from "../HireModal";

const style = {
  position: "absolute",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: 250,
  boxShadow: 20,
};

export default function TransitionsModal({ service }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <DetailsStyle>
        <Button className="detailsButton" onClick={handleOpen}>
          detalhes
        </Button>
      </DetailsStyle>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <DetailsStyle>
              <div className="serviceModal">
                <div className="category">{service.category}</div>
                <div className="otherInfos">
                  <img src={service.user.image}></img>
                  <div className="nameAndValue">
                    <p>{service.user.name}</p>
                    <p>R$ {service.value},00</p>
                  </div>
                </div>
                <p className="description">{service.description}</p>
                <HireModal service={service}></HireModal>
              </div>
            </DetailsStyle>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
