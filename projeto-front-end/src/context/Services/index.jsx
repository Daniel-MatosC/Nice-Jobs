import { createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const ServicesContext = createContext({});

const ServicesProvider = ({ children }) => {
  const {
    token,
    services,
    setServices,
    setFilteredServices,
    filteredServices,
  } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.get("/services?_expand=user").then((res) => setServices(res.data));
    }
  }, [services]);

  //   api.get("/services).then((res) => setServices(res));

  const createService = (data, userId) => {
    const formattedData = {
      ...data,
      userId: userId,
    };

    api
      .post("/services", formattedData)
      .then(() =>
        toast.success("Serviço cadastrado com sucesso!", {
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
        toast.error("Algo deu errado!", {
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

  const editService = (data, serviceId) => {
    api
      .patch(`/services/${serviceId}`, data)
      .then(() =>
        toast.success("Serviço editado com sucesso!", {
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
        toast.error("Algo deu errado!", {
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

  const deleteService = (serviceId) => {
    api
      .patch(`/services/${serviceId}`)
      .then(() =>
        toast.success("Serviço deletado com sucesso!", {
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
        toast.error("Algo deu errado!", {
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

  const filterCategory = (filterType) => {
    if (filterType === "Todos") {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter(({ category }) => category === filterType)
      );
    }
  };

  const filterSearchField = (searchField) => {
    if (searchField !== "".trim()) {
      setFilteredServices(
        services.filter(
          ({ category, name, user }) =>
            category
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim()) ||
            name
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim()) ||
            user.name
              .toLocaleLowerCase()
              .trim()
              .includes(searchField.toLocaleLowerCase().trim())
        )
      );
    } else {
      setFilteredServices(services);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        createService,
        editService,
        deleteService,
        filterCategory,
        filteredServices,
        filterSearchField,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
