  import axios from "axios";

  export default class UserService {
    constructor() {
      this.axios = axios.create({
        baseURL: "http://localhost:3001",
      });
    }

    async login(dados) {
      const { data } = await this.axios.post("/auth/login", dados);

      if (data) {
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("token", data.user.token);

        return true;
      }

      return;
    }

    async register(dados) {
      return this.axios.post("/auth/register", dados);
    }
    async getProducts() {
      return this.axios.get("/products");
    }

    usuarioAutenticado() {
      return localStorage.getItem("token") !== undefined ? true : false;
    }

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }
  }
