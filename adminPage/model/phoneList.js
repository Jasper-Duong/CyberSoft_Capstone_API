export class PhoneList {
  arr = [];
  getPhone() {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/phones",
      method: "GET",
    });
  }
  addPhone(phone) {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/phones",
      method: "POST",
      data: phone,
    });
  }
  removePhone(id) {
    return axios({
      url: `https://628b995c667aea3a3e32d139.mockapi.io/api/phones/${id}`,
      method: "DELETE",
    });
  }
}
