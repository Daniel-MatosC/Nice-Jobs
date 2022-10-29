import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default schema;
