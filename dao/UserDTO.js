class UserDTO {
  constructor(user) {
    this.id = user._id;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.age = user.age;
    this.cartId = user.cart;
    this.role = user.role;
  }
}

module.exports = UserDTO;
