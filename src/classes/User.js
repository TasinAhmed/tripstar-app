export class User {
  constructor(fName, lName, email, password, phoneNum) {
    this.fname = fName;
    this.lName = lName;
    this.email = email;
    this.password = password;
    this.phoneNum = phoneNum;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}
