import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../context/User";
import schemaLogin from "../../validations/login";
import schemaRegister from "../../validations/register";

import Input from "../Input";
import InputPassword from "../InputPassword";
import Button from "../Button";

import { ContainerLogin, ContainerRegister } from "./styles";

const Form = ({ type }) => {
  const { login, register: registerFn } = useContext(UserContext);

  const {
    register: registerLogin,
    handleSubmit: handleLogin,
    formState: { errors: errorsLogin },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const {
    register,
    handleSubmit,
    formState: { errors: errorsRegister },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <>
      {type === "login" ? (
        <ContainerLogin onSubmit={handleLogin(login)}>
          <div>
            <Input
              className="divPassword"
              placeholder="seu@email.com"
              {...registerLogin("email")}
              label="Email"
            />
            <span className="error">{errorsLogin.email?.message}</span>
          </div>

          <div>
            <InputPassword
              placeholder="Senha"
              id="password"
              {...registerLogin("password")}
              label="Senha"
            />
            <span className="error">{errorsLogin.password?.message}</span>
          </div>

          <Button type="submit">Login</Button>
        </ContainerLogin>
      ) : (
        <ContainerRegister onSubmit={handleSubmit(registerFn)}>
          <div className="form">
            <div className="column">
              <div className="infoSelector">
                <Input
                  placeholder="Nome"
                  id="name"
                  {...register("name")}
                  label="Nome"
                />

                <span>{errorsRegister.name?.message}</span>
              </div>

              <div className="infoSelector">
                <Input
                  placeholder="Email"
                  id="email"
                  {...register("email")}
                  label="Email"
                />

                <span>{errorsRegister.email?.message}</span>
              </div>

              <div className="infoSelector">
                <Input
                  placeholder="Senha"
                  id="password"
                  type="password"
                  {...register("password")}
                  label="Senha"
                />
                <span>{errorsRegister.password?.message} </span>
              </div>

              <div className="infoSelector">
                <Input
                  placeholder="Confirmar senha"
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  label="Confirme sua senha"
                />
                <span>{errorsRegister.confirmPassword?.message}</span>
              </div>
            </div>

            <div className="column">
              <div className="infoSelector">
                <Input
                  placeholder="(00) 0 0000 - 0000"
                  id="contact"
                  label="Contato"
                  type="number"
                  {...register("contact")}
                />

                <span>{errorsRegister.contact?.message}</span>
              </div>

              <div className="infoSelector">
                <Input
                  placeholder="Fale sobre você"
                  id="bio"
                  {...register("bio")}
                  label="Bio"
                />

                <span>{errorsRegister.bio?.message}</span>
              </div>

              <div className="selectDiv">
                <label htmlFor="select">Pretendo</label>

                <select title="type" id="select" {...register("type")}>
                  <option value="Fornecer Serviço">Fornecer Serviço</option>
                  <option value="Contratar Serviço">Contratar Serviço</option>
                </select>
              </div>
            </div>
          </div>

          <Button type="submit">Cadastre-se</Button>
        </ContainerRegister>
      )}
    </>
  );
};

export default Form;
