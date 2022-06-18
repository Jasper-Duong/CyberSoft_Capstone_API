function Product(_id, _name, _price, _img) {
  this.id = _id;
  this.name = _name;
  this.price = _price;
  this.img = _img;
}
function Quantity(_proQuantity) {
  this.proQuantity = _proQuantity;
}
function CartProduct(_product, _quantity) {
  this.product = _product;
  this.quantity = _quantity;
}
