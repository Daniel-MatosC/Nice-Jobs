import HeaderUserProfile from "../../components/HeaderUserProfile";
import {
  ContainerCard,
  ContainerFooter,
  ContainerInfo,
  ContainerMain,
  ContainerService,
} from "./style";
import user from "../../assets/Amongus 3.png";
import logo from "../../assets/logo.png";
import facebook from "../../assets/insta.png";
import instagram from "../../assets/face.png";
import linkedin from "../../assets/git.png";
import git from "../../assets/in.png";

const UserProfile = () => {
  return (
    <>
      <ContainerMain>
        <HeaderUserProfile />
        <ContainerInfo>
          <ContainerService>
            <div className="tittleAndButton">
              <h1>Meus Serviços</h1>
              <div>
                <button>Cadastrados</button>
                <button>Contratados</button>
              </div>
            </div>
            <div className="services">
              <ul>
                <li>
                  <div>
                    <h1>Cliente 1</h1>
                    <p>Finalizado</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h1>Cliente 2</h1>
                    <p>Finalizado</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h1>Cliente 3</h1>
                    <p>Finalizado</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h1>Cliente 4</h1>
                    <p>Finalizado</p>
                  </div>
                </li>
              </ul>
            </div>
          </ContainerService>
          <ContainerCard>
            <div className="card">
              <div className="userInfo">
                <img src={user} alt="" />
                <div>
                  <h1>Kenzinho da Silva</h1>
                  <span>Frete</span>
                  <p>R$100,00</p>
                </div>
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                est, maiores repellat molestias quo sapiente praesentium
                inventore quisquam dolor perspiciatis ad exercitationem
                accusamus earum aut ea id dolorum minus repudiandae?
              </p>

              <div className="editButtons">
                <button>Editar</button>
                <button>Deletar</button>
                <button>Finalizar</button>
              </div>
            </div>
          </ContainerCard>
        </ContainerInfo>
        <ContainerFooter>
          <div className="footerImages">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={git} alt="" />
            <img src={linkedin} alt="" />
            <img className="logo" src={logo} alt="" />
          </div>
          <div>
            <p>
              Desenvolvido por: Daniel Matos | Esther Suriel | Matheus Gomes |
              Sidarta Kauã |Tainá Tenório
            </p>
          </div>
        </ContainerFooter>
      </ContainerMain>
    </>
  );
};

export default UserProfile;
