const getEle = (id) => document.getElementById(id);

let service = new Service();

// lấy API sản phẩm
const getList = () => {
  service
    .getListAPI()
    .then((result) => {
      renderList(result.data);
      // OptionPhone(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getList();

const renderList = (data) => {
  // console.log(data);
  let content = "";
  let id = 0;

  data.forEach((listAPI) => {
    id += 1;
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
                    href="#demo-${id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${id}" class="collapse">
                    Camera sau: ${listAPI.backCamera} <br />
                    Camera trước: ${listAPI.frontCamera} <br />
                    Màn hình: ${listAPI.screen} <br />
                    Là một sản phẩm có "${listAPI.desc}"
                    </p>
                </div>
                <span>$-${listAPI.price} - </span>
                <a href="" class="btn btn-success">ADD</a>
            </div>
        </div>
        `;
  });
  getEle("listSP").innerHTML = content;
};

// option Iphone
const typeIphone = () => {
  let content = "";
  let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        if (phone.type === "Iphone") {
          id += 1;
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
                    href="#demo-${id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <a href="" class="btn btn-success">ADD</a>
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
  let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        if (phone.type === "Samsung") {
          id += 1;
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
                    href="#demo-${id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <a href="" class="btn btn-success">ADD</a>
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
  let id = 0;
  service
    .getListAPI()
    .then((result) => {
      arrOpt = result.data;
      arrOpt.forEach((phone) => {
        id += 1;
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
                    href="#demo-${id}"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="demo"
                    >
                    Thông tin sản phẩm
                    </a>
                    <p id="demo-${id}" class="collapse">
                    Camera sau: ${phone.backCamera} <br />
                    Camera trước: ${phone.frontCamera} <br />
                    Màn hình: ${phone.screen} <br />
                    Là một sản phẩm có "${phone.desc}"
                    </p>
                </div>
                <span>$-${phone.price} - </span>
                <a href="" class="btn btn-success">ADD</a>
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
