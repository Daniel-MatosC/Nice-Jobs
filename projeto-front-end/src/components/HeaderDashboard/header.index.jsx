import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { ServicesContext } from "../../context/Services";
import logo from "../../assets/whiteLogo.png";
import { Header } from "./styles";
import { FiSearch } from "react-icons/fi";

const HeaderDashboard = () => {
  const { user } = useContext(UserContext);
  const { filterSearchField } = useContext(ServicesContext);

  return (
    <Header>
      <section className="infoUser">
        <img className="imgUser" src={user.image} alt="foto do usuario" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </section>
      <div className="navegationDiv">
        <section className="navegation">
          <img className="whiteLogo" src={logo} alt="logo branca" />
          <Menu />
          <div className="search">
            <input
              type="text"
              placeholder="Pesquise um serviço"
              onChange={(e) => filterSearchField(e.currentTarget.value)}
            />
            <FiSearch className="searchIcon" />
          </div>
          <MenuCategory />
        </section>
      </div>
    </Header>
  );
};

export default HeaderDashboard;
