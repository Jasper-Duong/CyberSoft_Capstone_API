export class Service {
  arr = [];

  getListAPI = () => {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/phones",
      method: "GET",
    });
  };
  getProductById = (id) => {
    return axios({
      url: `https://628b995c667aea3a3e32d139.mockapi.io/api/phones/${id}`,
      method: "GET",
    });
  }
  
}
