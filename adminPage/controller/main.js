let getEle = (id) => document.getElementById(id);

import { Phone } from "../model/phone.js";
import { PhoneList } from "../model/phoneList.js";
import { Helper } from "./helper.js";
let helper = new Helper();
let phoneList = new PhoneList();

let renderList = () => {
  phoneList
    .getPhone()
    .then((result) => {
      let content = "";
      result.data.forEach((ele, id) => {
        content += `
        <tr>
          <td>${id + 1}</td>
          <td>${ele.name}</td>
          <td>${ele.price}</td>
          <td class="phoneImg">
          <img src="${ele.img}">
          </td>
          <td>${ele.desc}</td>
          <td>
            <button class="btn btn-info" onclick="edit('${
              ele.id
            }')">Sửa</button>
            <button class="btn btn-danger" onclick="remove('${
              ele.id
            }')">Xoá</button>
          </td>
        </tr>
      `;
        // console.log(ele);
      });
      getEle("tblPhoneList").innerHTML = content;
    })
    .catch((error) => console.log(error));
};
window.onload = () => renderList();

getEle("btnThemSanPham").onclick = () => {
  getEle("btnAdd").style.display = "inline-block";
  getEle("btnUpdate").style.display = "none";
  helper.prefill();
};
getEle("btnAdd").onclick = () => {
  let inputs = helper.getInputValue();
  let phone = new Phone("", ...inputs);
  phoneList
    .addPhone(phone)
    .then((result) => {
      renderList();
      document.querySelector('.close').click();
    })
    .catch((error) => console.log(error));
};

window.remove = (id) => {
  phoneList
    .removePhone(id)
    .then(() => renderList())
    .catch((error) => console.log(error));
};

window.edit = (id) => {
  console.log(id);
};
