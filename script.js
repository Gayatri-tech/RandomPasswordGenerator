class Password {
  constructor(password) {
    this.password = password;
  }

  generateSuperStrongPassword() {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%&+=-()*^";
    const numbers = "0123456789";

    let password = "";

    for (let i = 0; i < 3; i++) {
      let randNum1 = Math.floor(Math.random() * smallLetters.length);
      let randNum2 = Math.floor(Math.random() * capitalLetters.length);
      let randNum3 = Math.floor(Math.random() * specialChars.length);
      let randNum4 = Math.floor(Math.random() * numbers.length);

      password += smallLetters[randNum1];
      password += capitalLetters[randNum2];
      password += specialChars[randNum3];
      password += numbers[randNum4];
    }
    this.password = password;
    return password;
  }

  generateStrongPassword() {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%&+=-()*^";
    const numbers = "0123456789";

    let password = "";

    for (let i = 0; i < 2; i++) {
      let randNum1 = Math.floor(Math.random() * smallLetters.length);
      let randNum2 = Math.floor(Math.random() * capitalLetters.length);
      let randNum3 = Math.floor(Math.random() * specialChars.length);
      let randNum4 = Math.floor(Math.random() * numbers.length);

      password += smallLetters[randNum1];
      password += capitalLetters[randNum2];
      password += specialChars[randNum3];
      password += numbers[randNum4];
    }
    this.password = password;
    return password;
  }

  generateWeakPassword() {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%&+=-()*^";
    const numbers = "0123456789";

    let password = "";

    let randNum1 = Math.floor(Math.random() * smallLetters.length);
    let randNum2 = Math.floor(Math.random() * capitalLetters.length);
    let randNum3 = Math.floor(Math.random() * specialChars.length);
    let randNum4 = Math.floor(Math.random() * numbers.length);

    password += smallLetters[randNum1];
    password += capitalLetters[randNum2];
    password += specialChars[randNum3];
    password += numbers[randNum4];

    this.password = password;
    return password;
  }

  generateFunnyPassword() {
    const arr = [
      "incorrect",
      "error",
      "password",
      "123",
      "admin",
      "user",
      "1999",
      "hackme",
    ];
    let randNum = Math.floor(Math.random() * arr.length);
    this.password = arr[randNum];
    return this.password;
  }
}
let pwd = new Password();

let funnyPassword = pwd.generateFunnyPassword();
console.log("Your randomly generated funny password is:", funnyPassword);

let weakPassword = pwd.generateWeakPassword();
console.log("Your weak password is:", weakPassword);

let strongPassword = pwd.generateStrongPassword();
console.log("Your strong password is:", strongPassword);

let superStrongPassword = pwd.generateSuperStrongPassword();
console.log("Your super strong password is:", superStrongPassword);
