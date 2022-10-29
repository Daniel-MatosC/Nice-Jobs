import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome de usuário obrigatório")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "O nome pode conter apenas letras"
    ),
  email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
  contact: yup
    .string()
    .required("Número para contato obrigatório")
    .min(11, "O número para contato deve ter 11 digitos")
    .matches(/(?=.*?[0-9])/, "Digite seu contato em números apenas"),
  bio: yup.string().required("Biografia obrigatória"),
});

export default schema;
