import { useState } from "react";
import { Div } from "./styles";
import ModalPerfil from "../../modals/modalPerfil";
import AddServiceModal from "../../modals/AddServiceModal";
import ModalPremium from "../../modals/modalPremium";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const Logout = () => {
    localStorage.clear();

    navigate("/");

    toast.success("Usuário deslogado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  };

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
    <Div>
      <div
        className={activeMenu ? "icon iconActive" : "icon"}
        onClick={toggleMenu}
      >
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={activeMenu ? "menu menuOpen" : "menu menuClose"}>
        <menu className="list">
          <ul className="listItems">
            <li>
              <ModalPerfil />
            </li>
            <li>
              <AddServiceModal />
            </li>
            <li>
              <ModalPremium />
            </li>
            <li onClick={notify}>Meus Serviços</li>
            <li onClick={Logout}>Sair</li>
          </ul>
        </menu>
      </div>
    </Div>
  );
};

export default Menu;
