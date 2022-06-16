function Service() {
  this.arr = [];
  this.getListAPI = () => {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/phones?fbclid=IwAR2tsVjZ8g2A31IlhDGbYPjmNw9W4goki43SgOkQATwLvzT_QfUpsUbzpMY",
      method: "GET",
    });
  };
}
