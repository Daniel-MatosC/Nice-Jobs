import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@Nice-jobs:token"));
  const [user, setUser] = useState({});
  const [services, setServices] = useState(null);
  const [filteredServices, setFilteredServices] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/dashboard", { replace: true });
  }, [token]);

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;

    api.get("/services?_expand=user").then((res) => {
      setServices(res.data);
      setFilteredServices(res.data);
    });

    const userId = localStorage.getItem("@Nice-jobs:id");

    if (userId) {
      api
        .get(`/users/${userId}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false));
    }
  }, [token]);

  const login = (data) => {
    api
      .post("/login", data)
      .then(({ data }) => {
        localStorage.setItem("@Nice-jobs:token", data.accessToken);
        localStorage.setItem("@Nice-jobs:id", data.user.id);

        setToken(data.accessToken);

        setUser(data.user);

        navigate("/dashboard", { replace: true });

        toast.success("Usuário logado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
      .catch(() =>
        toast.error("Email ou senha inválidos!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  const register = ({ email, name, password, contact, bio, type }) => {
    const data = {
      email,
      name,
      password,
      contact,
      bio,
      type,
      premium: false,
      image:
        "https://imgs.search.brave.com/KbRNVWFimWUnThr3tB08-RFa0i7K1uc-zlK6KQedwUU/rs:fit:860:752:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI0LTI0/ODI1M191c2VyLXBy/b2ZpbGUtZGVmYXVs/dC1pbWFnZS1wbmct/Y2xpcGFydC1wbmct/ZG93bmxvYWQucG5n",
    };

    api
      .post("/register", data)
      .then(() => {
        navigate("/", { replace: true });
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
      .catch(() =>
        toast.error("Email já cadastrado.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        })
      );
  };

  // const userById = (id) => {
  // if (token) {
  //   api.defaults.headers.authorization = `Bearer ${token}`;
  //
  //   api.get(`/users/${id}`).then((res) => console.log(res));
  // }
  // };

  const editUser = (data, id) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .patch(`/users/${id}`, data)
        .then(({ data }) => {
          setUser(data.user);
          toast.success("Usuário editado com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          });
        })
        .catch(() =>
          toast.error("Ocorreu algum erro!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          })
        );
    }
  };

  const deleteUser = (id) => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .delete(`/users/${id}`)
        .then(() =>
          toast.success("Usuário deletado com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          })
        )
        .catch(() =>
          toast.error("Ocorreu algum erro!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          })
        );
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        login,
        register,
        editUser,
        deleteUser,
        setServices,
        services,
        filteredServices,
        setFilteredServices,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
