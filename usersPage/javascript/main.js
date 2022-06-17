const getEle = (id) => document.getElementById(id);

let service = new Service();

// lấy API sản phẩm
const getList = () => {
  service
    .getListAPI()
    .then((result) => {
      renderList(result.data);
      // console.log(result.data);
      addListproduct(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getList();

const renderList = (data) => {
  // console.log(data);
  let content = "";
  // let id = 0;

  data.forEach((listAPI) => {
    // id += 1;
    content += `
        <div class="card col-3">
            <img
            src="${listAPI.img}"
            class="img-fluid py-5"
            style="width: 15.625em"
            alt=""
            />
            <div class="card-body" id="card_body">
                <h3 class="card-title">${listAPI.name} - 64GB</h3>
                <div class="card-text pb-4">
                    <a
                    href="#demo-${listAPI.id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${listAPI.id}" class="collapse">
                    Camera sau: ${listAPI.backCamera} <br />
                    Camera trước: ${listAPI.frontCamera} <br />
                    Màn hình: ${listAPI.screen} <br />
                    Là một sản phẩm có "${listAPI.desc}"
                    </p>
                </div>
                <span>$-${listAPI.price} - </span>
                <button  class="btn btn-success">ADD</button>
            </div>
        </div>
        `;
  });
  getEle("listSP").innerHTML = content;
};

// option Iphone
const typeIphone = () => {
  let content = "";
  // let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        if (phone.type === "Iphone") {
          // id += 1;
          content += `
        <div class="card col-3">
            <img
            src="${phone.img}"
            class="img-fluid py-5"
            style="width: 15.625em"
            alt=""
            />
            <div class="card-body" id="card_body">
                <h3 class="card-title">${phone.name} - 64GB</h3>
                <div class="card-text pb-4">
                    <a
                    href="#demo-${phone.id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${phone.id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <button  class="btn btn-success">ADD</button>
            </div>
        </div>
        `;
        }
      });
      getEle("listSP").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};
const typeSamsung = () => {
  let content = "";
  // let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        if (phone.type === "Samsung") {
          // id += 1;
          content += `
        <div class="card col-3">
            <img
            src="${phone.img}"
            class="img-fluid py-5"
            style="width: 15.625em"
            alt=""
            />
            <div class="card-body" id="card_body">
                <h3 class="card-title">${phone.name} - 64GB</h3>
                <div class="card-text pb-4">
                    <a
                    href="#demo-${phone.id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${phone.id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <button  class="btn btn-success">ADD</button>
            </div>
        </div>
        `;
        }
      });
      getEle("listSP").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};
const typeAll = () => {
  let content = "";
  // let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        // id += 1;
        content += `
        <div class="card col-3">
            <img
            src="${phone.img}"
            class="img-fluid py-5"
            style="width: 15.625em"
            alt=""
            />
            <div class="card-body" id="card_body">
                <h3 class="card-title">${phone.name} - 64GB</h3>
                <div class="card-text pb-4">
                    <a
                    href="#demo-${phone.id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${phone.id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <button  class="btn btn-success">ADD</button>
            </div>
        </div>
        `;
      });
      getEle("listSP").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};

// select option
const OnChangePhone = (selectOpt) => {
  let opPhone = selectOpt.value;
  let opPhoneStr = opPhone.toString();
  if (opPhoneStr === "Iphone") {
    typeIphone();
  }
  if (opPhoneStr === "Samsung") {
    typeSamsung();
  }
  if (opPhoneStr === "all") {
    typeAll();
  }
};
//
let arrProduct = [];
const addListproduct = (data, uantity) => {
  let quantity = 1;
  data.forEach((ele) => {
    let product = new Product(ele.id, ele.name, ele.price, ele.img);
    let quanPro = new Quantity(quantity);
    cartpro = new CartProduct(product, quanPro);
    arrProduct.push(cartpro);
  });
};
// console.log(arrProduct);

let btnADD = document.getElementsByClassName("btn-success");
for (let i = 0; i < btnADD.length; i++) {
  i++;
  btnADD[i].onclick = function () {
    console.log(true);
  };
}
