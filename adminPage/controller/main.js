let getEle = (id) => document.getElementById(id);

import { Phone } from "../model/phone.js";
import { PhoneList } from "../model/phoneList.js";

let phoneList = new PhoneList();

let renderList = () => {
  let content = "";
  phoneList
    .getPhone()
    .then((result) => {
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
        console.log(ele);
      });
      getEle("tblPhoneList").innerHTML = content;
    })
    .catch((error) => console.log(error));
};

renderList();
